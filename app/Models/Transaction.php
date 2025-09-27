<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'transaction_type_id',
        'amount',
        'currency',
        'status',
        'transaction_data'
    ];

    protected $casts = [
        'transaction_data' => 'array',
        'amount' => 'decimal:2'
    ];

    // Relationship with user
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Relationship with transaction type
    public function transactionType()
    {
        return $this->belongsTo(TransactionType::class);
    }

    

    // Simple method to update status
    public function updateStatus($status)
    {
        $this->status = $status;
        return $this->save();
    }
}