<?php

namespace App\Modules\DopamineTracker\Services\Rapport;

class GenerateurRecommandation
{
    public function execute(float|int $ratioDopamineLente, float|int $ratioDopamineRapide)
    {
        $recommandations = [];

        // Situation idéale
        if ($ratioDopamineLente >= 60 && $ratioDopamineRapide <= 40) {
            $recommandations[] = [
                "priorite" => "Equilibre",
                "titre" => "Excellent équilibre",
                "description" => "Continuez à privilégier les activités à dopamine lente."
            ];
        }

        // Trop de dopamine rapide
        if ($ratioDopamineRapide > 60) {
            $recommandations[] = [
                "priorite" => "elevee",
                "titre" => "Réduire les stimulations rapides",
                "description" => "Votre ratio de dopamine rapide est élevé. Essayez de limiter les réseaux sociaux, le scrolling ou les récompenses immédiates."
            ];
        }

        // Pas assez de dopamine lente
        if ($ratioDopamineLente < 40) {
            $recommandations[] = [
                "priorite" => "normal",
                "titre" => "Augmenter les activités enrichissantes",
                "description" => "Ajoutez davantage d'activités comme le sport, l'apprentissage ou la création."
            ];
        }

        // Cas intermediaire
        if ($ratioDopamineRapide > 40 && $ratioDopamineRapide <= 60) {
            $recommandations[] = [
                "priorite" => "faible",
                "titre" => "Équilibre à améliorer",
                "description" => "Vous êtes proche de l'objectif. Essayez d'augmenter légèrement vos activités à dopamine lente."
            ];
        }

        return $recommandations;
    }
}
