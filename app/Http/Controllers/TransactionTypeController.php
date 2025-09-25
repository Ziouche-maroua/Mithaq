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

 

   public function show(TransactionType $transactionType)
    {
        return Inertia::render('TransactionTypes/Show', [
            'transactionType' => $transactionType->load('transactions')
        ]);
    }
    
}