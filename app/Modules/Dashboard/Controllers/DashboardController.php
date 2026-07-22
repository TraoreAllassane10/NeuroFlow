<?php

namespace App\Modules\Dashboard\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $neuro_scores = $user->neuro_scores()->whereToday('date')->first();

        return Inertia::render('dashboard', [
            "neuro_scores" => [
                "score_global" => $neuro_scores->score_global,
                "score_dopamine" => $neuro_scores->score_dopamine,
                "score_cortisol" => $neuro_scores->score_cortisol,
                "score_serotonine" => $neuro_scores->score_serotonine,
                "score_oxytocine" => $neuro_scores->score_oxytocine
            ]
        ]);
    }
}
