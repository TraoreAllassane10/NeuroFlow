<?php

namespace App\Modules\DopamineTracker\Services\Rapport;

class CalculateurRatio
{

    public function execute(mixed $stimulis)
    {
        $nombreTotalStimulis = $stimulis->count();

        if ($nombreTotalStimulis === 0) {
            return [
                "ratio_dopamine_lente" => 0,
                "ratio_dopamine_rapide" => 0
            ];
        }

        $dopamineLentes = $stimulis->where('type', 'lente')->count();
        $dopamineRapide = $stimulis->where('type', 'rapide')->count();

        return [
            "ratio_dopamine_lente" => round(($dopamineLentes / $nombreTotalStimulis)  * 100, 1),
            "ratio_dopamine_rapide" => round(($dopamineRapide / $nombreTotalStimulis)  * 100, 1)
        ];
    }
}
