<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;


Route::get('/{any?}/{slug?}/{id?}', function () {
    return view('welcome');
});

Route::post('/login', [AuthController::class, 'login']);
