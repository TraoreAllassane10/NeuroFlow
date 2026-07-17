<?php

namespace App\Modules\DopamineTracker\Services\Rapport;

use App\Models\StimulusLog;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class RapportManager
{
    public function __construct(
        protected AnalyseurStimulisService $analyseurStimulisService,
        protected CalculateurRatio $calculateurRatio,
        protected AnalyseurTrend $analyseurTrend,
        protected GenerateurRecommandation $generateurRecommandation
    ) {}
    public function orchestrer()
    {
        $user = Auth::user();

        // Tous les stimulis des 30 derniers jours
        $stimulis = StimulusLog::where('user_id', $user->id)
            ->where('created_at', ">=", Carbon::now()->subDays(29))
            ->get();

        // Utilisation du service analyseur de stimuli
        $dataAnalyseurStimulis = $this->analyseurStimulisService->execute($stimulis);
        $nombreTotalDeStimuli = $dataAnalyseurStimulis['total_stimuli'];
        $intensiteMoyenneParCategorie = $dataAnalyseurStimulis['intensite_moyenne_par_categorie'];


        // Utilisation du calculateur de ratio 
        $dataCalculateurRatio = $this->calculateurRatio->execute($stimulis);
        $ratioDopamineLente = $dataCalculateurRatio['ratio_dopamine_lente'];
        $ratioDopamineRapide = $dataCalculateurRatio['ratio_dopamine_rapide'];

        // Utilisation du service chargé de la construction des données pour le graphique
        $dataChart = $this->analyseurTrend->execute($user);

        // Utilisattion du generateur de recommandation
        $recommandations = $this->generateurRecommandation->execute($ratioDopamineLente, $ratioDopamineRapide);

        return [
            "nombre_total_stimuli" => $nombreTotalDeStimuli,
            "intensite_moyenne_par_categorie" => $intensiteMoyenneParCategorie,
            "ratio_dopamine_lente" => $ratioDopamineLente,
            "ratio_dopamine_rapide" => $ratioDopamineRapide,
            "data_chart" => $dataChart,
            "recommandations" => $recommandations
        ];
    }
}
