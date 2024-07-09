<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any?}/{slug?}/{id?}', function () {
    return view('welcome');
});
