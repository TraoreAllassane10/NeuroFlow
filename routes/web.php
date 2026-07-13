<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');

    Route::get('/dopamine-tracker', function () {
        return Inertia::render('dopamineTracker/Index');
    });
});

require __DIR__ . '/settings.php';
