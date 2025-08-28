<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BusController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Priority 1
Route::get('/buses', [BusController::class, 'index']);   // restituisce tutti gli autobus
Route::post('/buses', [BusController::class, 'store']);  // crea un nuovo autobus

// Priority 2
Route::put('/buses/{id}', [BusController::class, 'update']);    // aggiorna un autobus specifico
Route::delete('/buses/{id}', [BusController::class, 'destroy']); // elimina un autobus specifico
