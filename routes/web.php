<?php

use App\Modules\DopamineTracker\Controllers\DopamineTrackerController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');

    // Modules Dopamine Tracker
    Route::controller(DopamineTrackerController::class)->group(function () {
        Route::get('/dopamine-tracker', 'index');
        Route::post('/dopamine-tracker/create', 'store');
        Route::get('/dopamine-tracker/par-date', 'stimulusParDate');
    });

    Route::get('/flow-engine', function () {
        return Inertia::render('flowEngine/Index');
    });
});

require __DIR__ . '/settings.php';
