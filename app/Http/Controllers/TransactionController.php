<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use App\Models\TransactionType;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    public function index()
    {
        $transactions = Transaction::with(['user', 'transactionType'])->get();
        return response()->json($transactions);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'transaction_type_id' => 'required|exists:transaction_types,id',
            'amount' => 'required|numeric|min:0',
            'currency' => 'string|max:3',
            'transaction_data' => 'nullable|array'
        ]);

        $transaction = Transaction::create($validated);


        if ($transaction instanceof Transaction) {
            return response()->json($transaction->load(['user', 'transactionType']), 201);
        } else {
            return response()->json(['error' => 'Transaction creation failed'], 500);
        }
    }

    public function show(Transaction $transaction)
    {
        return response()->json($transaction->load(['user', 'transactionType']));
    }
}