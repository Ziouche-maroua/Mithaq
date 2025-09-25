<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TransactionType extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'rules_template',
        'is_active'
    ];

    protected $casts = [
        'rules_template' => 'array',
        'is_active' => 'boolean'
    ];

    // Relationship with transactions
    public function transactions()
    {
        return $this->hasMany(Transaction::class, 'transaction_type_id');
    }
}