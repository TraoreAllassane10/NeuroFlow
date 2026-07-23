<?php

namespace App\Modules\Dashboard\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Dashboard\Services\DashboardService;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{

    public function __construct(
        protected DashboardService $dashboardSerice
    ) {}
    public function index()
    {
        $user = Auth::user();
        $neuro_scores = $user->neuro_scores()->whereToday('date')->first();

        $evolutionData = $this->dashboardSerice->getDataEvolution();

        return Inertia::render('dashboard', [
            "neuro_scores" => [
                "score_global" => $neuro_scores->score_global ?? 0,
                "score_dopamine" => $neuro_scores->score_dopamine ?? 0,
                "score_cortisol" => $neuro_scores->score_cortisol ?? 0,
                "score_serotonine" => $neuro_scores->score_serotonine ?? 0,
                "score_oxytocine" => $neuro_scores->score_oxytocine ?? 0
            ],
            "graphique" => [
                "evolution" => $evolutionData
            ]
        ]);
    }

    public function evolution(string $period)
    {
        $data = $this->dashboardSerice->getDataEvolution($period);
        return response()->json(['success' => true, 'data' => $data,]);
    }
}
