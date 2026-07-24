<?php

namespace App\Modules\Dashboard\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Dashboard\Services\DashboardService;
use App\Modules\Dashboard\Services\RecommandationService;
use App\Modules\DopamineTracker\Services\DopamineTrackerService;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{

    public function __construct(
        protected DashboardService $dashboardSerice,
        protected DopamineTrackerService $dopamineTrackerService,
        protected RecommandationService $recommandationService
    ) {}
    public function index()
    {
        $user = Auth::user();
        $neuro_scores = $user->neuro_scores()->whereToday('date')->first();

        $evolutionData = $this->dashboardSerice->getDataEvolution();
        $recent_stimuli = $this->dopamineTrackerService->getRecentStimuli();
        $heatmapData = $this->dopamineTrackerService->getNombreStimuliParJour();
        $recommandations = $this->recommandationService->generer($user);

        return Inertia::render('dashboard', [
            "neuro_scores" => [
                "score_global" => $neuro_scores->score_global ?? 0,
                "score_dopamine" => $neuro_scores->score_dopamine ?? 0,
                "score_cortisol" => $neuro_scores->score_cortisol ?? 0,
                "score_serotonine" => $neuro_scores->score_serotonine ?? 0,
                "score_oxytocine" => $neuro_scores->score_oxytocine ?? 0
            ],
            "graphique" => [
                "evolution" => $evolutionData,
                "heatmap" => $heatmapData['data'],
                "streak" => $heatmapData['nombre_jour_activite']
            ],
            "recommandations" => $recommandations,
            "recent_stimuli" => $recent_stimuli,
        ]);
    }

    public function evolution(string $period)
    {
        $data = $this->dashboardSerice->getDataEvolution($period);
        return response()->json(['success' => true, 'data' => $data]);
    }
}
