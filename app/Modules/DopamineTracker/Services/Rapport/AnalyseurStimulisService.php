<?php

namespace App\Modules\DopamineTracker\Services\Rapport;

class AnalyseurStimulisService
{

    public function execute(mixed $stimulis)
    {

        // Nombre total des stimulis
        $nombreTotalStimuli = $stimulis->count();

        // Calcule la l'intensite moyenne de chaque categorie
        $moyenneIntensiteParCategorie = $stimulis->groupBy('categorie')->map(function ($group) {
            // Total stimuli d'une categorie
            $stimuliTotalCategorie = $group->count();

            return [
                "categorie" => $group->first()->categorie,
                "intensite_moyenne" => round($group->sum('intensite') / $stimuliTotalCategorie, 1)
            ];
        })
            ->values();

        return [
            "total_stimuli" => $nombreTotalStimuli,
            "intensite_moyenne_par_categorie" => $moyenneIntensiteParCategorie
        ];
    }
}
