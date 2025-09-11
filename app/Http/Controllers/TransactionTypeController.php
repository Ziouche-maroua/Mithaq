<?php

namespace App\Http\Controllers;

use App\Models\TransactionType;
use Illuminate\Http\Request;

class TransactionTypeController extends Controller
{
    public function index()
    {
        $transactionTypes = TransactionType::where('is_active', true)->get();
        return response()->json($transactionTypes);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'rules_template' => 'nullable|array',
            'is_active' => 'boolean'
        ]);

        $transactionType = TransactionType::create($validated);
        return response()->json($transactionType, 201);
    }

    public function show(TransactionType $transactionType)
    {
        return response()->json($transactionType);
    }
}