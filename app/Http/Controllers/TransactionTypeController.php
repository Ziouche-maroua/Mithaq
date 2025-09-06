<?php

namespace App\Http\Controllers;

use App\Models\TransactionType;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TransactionTypeController extends Controller
{
    public function index()
    {
        $transactionTypes = TransactionType::orderBy('name')->get();
        
        return Inertia::render('TransactionTypes/Index', [
            'transactionTypes' => $transactionTypes
        ]);
    }

    public function create()
    {
        return Inertia::render('TransactionTypes/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:transaction_types',
            'description' => 'nullable|string|max:1000',
            'is_active' => 'boolean'
        ]);

        $validated['is_active'] = $validated['is_active'] ?? true;

        TransactionType::create($validated);

        return redirect()->route('transaction-types.index')
            ->with('success', 'Transaction type created successfully.');
    }

    public function show(TransactionType $transactionType)
    {
        return Inertia::render('TransactionTypes/Show', [
            'transactionType' => $transactionType->load('transactions')
        ]);
    }

    public function edit(TransactionType $transactionType)
    {
        return Inertia::render('TransactionTypes/Edit', [
            'transactionType' => $transactionType
        ]);
    }

    public function update(Request $request, TransactionType $transactionType)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:transaction_types,name,' . $transactionType->id,
            'description' => 'nullable|string|max:1000',
            'is_active' => 'boolean'
        ]);

        $transactionType->update($validated);

        return redirect()->route('transaction-types.index')
            ->with('success', 'Transaction type updated successfully.');
    }

    public function destroy(TransactionType $transactionType)
    {
        // Check if there are any transactions using this type
        if ($transactionType->transactions()->count() > 0) {
            return back()->with('error', 'Cannot delete transaction type that has associated transactions.');
        }

        $transactionType->delete();

        return redirect()->route('transaction-types.index')
            ->with('success', 'Transaction type deleted successfully.');
    }
}