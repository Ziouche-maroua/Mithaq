<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TransactionTypeController;
use App\Http\Controllers\TransactionController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


   Route::get('/types-description', function () {
    return Inertia::render('TypesDescription/Index');
})->name('types.description');
   
      // Transaction Type routes
    Route::resource('transaction-types', TransactionTypeController::class);
    
    // Transaction routes
    Route::resource('transactions', TransactionController::class);

});



require __DIR__.'/auth.php';
