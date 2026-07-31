<?php

use App\Http\Controllers\DailyCheckinController;
use App\Http\Controllers\OnboardingController;
use App\Modules\Dashboard\Controllers\DashboardController;
use App\Modules\DopamineTracker\Controllers\DopamineTrackerController;
use App\Modules\DopamineTracker\Controllers\RapportController;
use App\Modules\FlowEngine\Controllers\FlowSessionController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {

    // Onboarding
    Route::get('/onboarding', [OnboardingController::class, 'index'])->name("onboarding.index");
    Route::post('/onboarding', [OnboardingController::class, 'update'])->name('onboarding.update');

    // Daily Checkin
    Route::post('/daily-checkin', [DailyCheckinController::class, 'store'])->name('daily-chekin.store');

    // Modules Dashbaord 
    Route::middleware('onboarding')->controller(DashboardController::class)->group(function () {
        Route::get('dashboard',  'index')->name('dashboard');
        Route::get('/evolution/{period}', 'evolution')->name('evolution');
        Route::get('/recommendation/{id}', 'recommendation')->name('recommendation');
        Route::get('/recommendation/{id}/accompli', 'accompliRecommendation')->name('recommendation.accompli');
    });

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

    Route::middleware('onboarding')->controller(FlowSessionController::class)->group(function () {
        Route::get('/flow-engine', 'index');
        Route::post('/flow-engine/session/create', 'store')->name('session.create');
    });
});

require __DIR__ . '/settings.php';
