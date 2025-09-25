<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use App\Models\TransactionType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\User;

class TransactionController extends Controller
{
    public function index()
    {
        $transactions = Transaction::with(['user', 'transactionType'])
            ->orderBy('created_at', 'desc')
            ->get();

        return Inertia::render('Transactions/Index', [
            'transactions' => $transactions
        ]);
    }

  


    public function create()
    {
//  return Inertia::render('Transactions/Create', [
//         'transactionTypes' => TransactionType::all(),
//         'users' => User::all(),
//     ]);

        $transactionTypes = TransactionType::where('is_active', true)
            ->orderBy('name')
            ->get();

        return Inertia::render('Transactions/Create', [
            'transactionTypes' => $transactionTypes
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'transaction_type_id' => 'required|exists:transaction_types,id',
            'amount' => 'required|numeric|min:0.01',
            'currency' => 'nullable|string|max:3',
            'transaction_data' => 'nullable|array'
        ]);

        $validated['user_id'] = Auth::id();
        $validated['currency'] = $validated['currency'] ?? 'USD';
        $validated['status'] = 'draft';

        Transaction::create($validated);

        return redirect()->route('transactions.index')
            ->with('success', 'Transaction created successfully.');
    }

    public function show(Transaction $transaction)
    {
        return Inertia::render('Transactions/Show', [
            'transaction' => $transaction->load(['user', 'transactionType'])
        ]);
    }

    public function edit(Transaction $transaction)
    {
        // Only allow editing of draft transactions
        if ($transaction->status !== 'draft') {
            return back()->with('error', 'Only draft transactions can be edited.');
        }

        $transactionTypes = TransactionType::where('is_active', true)
            ->orderBy('name')
            ->get();

        return Inertia::render('Transactions/Edit', [
            'transaction' => $transaction,
            'transactionTypes' => $transactionTypes
        ]);
    }

    public function update(Request $request, Transaction $transaction)
    {
        if ($transaction->status !== 'draft') {
            return back()->with('error', 'Only draft transactions can be edited.');
        }

        $validated = $request->validate([
            'transaction_type_id' => 'required|exists:transaction_types,id',
            'amount' => 'required|numeric|min:0.01',
            'currency' => 'nullable|string|max:3',
            'transaction_data' => 'nullable|array'
        ]);

        $validated['currency'] = $validated['currency'] ?? 'USD';

        $transaction->update($validated);

        return redirect()->route('transactions.index')
            ->with('success', 'Transaction updated successfully.');
    }

    public function destroy(Transaction $transaction)
    {
        // Only allow deletion of draft transactions
        if ($transaction->status !== 'draft') {
            return back()->with('error', 'Only draft transactions can be deleted.');
        }

        $transaction->delete();

        return redirect()->route('transactions.index')
            ->with('success', 'Transaction deleted successfully.');
    }
}