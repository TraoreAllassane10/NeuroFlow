<?php

use App\Modules\Dashboard\Controllers\DashboardController;
use App\Modules\DopamineTracker\Controllers\DopamineTrackerController;
use App\Modules\DopamineTracker\Controllers\RapportController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [DashboardController::class, 'index'])
        ->middleware('onboarding')->name('dashboard');

    Route::get('/onboarding', function () {
        return Inertia::render('onboarding');
    })->name("onboarding.index");

    // Modules Dopamine Tracker
    Route::middleware('onboarding')->controller(DopamineTrackerController::class)->group(function () {
        Route::get('/dopamine-tracker', 'index')->name('dopamine-tracker.index');
        Route::get('/dopamine-tracker/{stimuli}/show', 'show')->name('dopamine-tracker.show');
        Route::post('/dopamine-tracker/create', 'store')->name('dopamine-tracker.store');
        Route::get('/dopamine-tracker/par-date', 'stimulusParDate')->name('dopamine-tracker.par-date');
        Route::get('/dopamine-tracker/chart', 'dataChart')->name('dopamine-tracker.chart');
        Route::get('/dopamine-tracker/export-csv', 'exportCsv')->name('dopamine-tracker.export-csv');
        Route::delete('/dopamine-tracker/{stimuli}/delete', 'destroy')->name('dopamine-tracker.destroy');
    });
    Route::get('/dopamine-tracker/rapport', [RapportController::class, 'generer'])->name('dopamine-tracker.rapport');

    Route::get('/flow-engine', function () {
        return Inertia::render('flowEngine/Index');
    });
});

require __DIR__ . '/settings.php';
