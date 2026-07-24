<?php

namespace App\Modules\Dashboard\Services;

use App\Models\DailyCheckin;
use App\Models\NeuroScore;
use App\Models\Recommendation;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Log;
use Prism\Prism\Exceptions\PrismRateLimitedException;
use Prism\Prism\Facades\Prism;

class RecommandationService
{
    public function generer(User $user)
    {
        try {
            $recommendations =  $this->getRecommendationsDuJour($user);

            if ($recommendations->count() >= 1) {
                return $recommendations;
            } else {
                $scores = NeuroScore::whereToday('date')
                    ->where('user_id', $user->id)
                    ->first();
                $dailyCheckin = DailyCheckin::where('user_id', $user->id)
                    ->whereToday('date')
                    ->first();

                $context = [
                    'score_dopamine' => $scores->score_dopamine,
                    'score_cortisol' => $scores->score_cortisol,
                    'score_serotonine' => $scores->score_serotonine,
                    'score_oxytocine' => $scores->score_oxytocine,
                    'score_global' => $scores->score_global,

                    'humeur_utilisateur' => $dailyCheckin->humeur . '/10',
                    'qualite_sommeil_utilisateur' => $dailyCheckin->qualite_sommeil . '/10',
                    'niveau_energie_utilisateur' => $dailyCheckin->niveau_energie . '/10',

                    'chronotype_utilisateur' => $user->chronotype,
                    'objectif_utilisateur' => $user->objectif_principal
                ];

                $prompt = $this->construirePrompt($context);

                $response = Prism::text()
                    ->using('gemini', 'gemini-flash-latest')
                    ->withPrompt($prompt)
                    ->asText();

                $contenu = $response->text;

                $recommendationsGemini = json_decode($contenu, true);

                Log::info($recommendationsGemini);

                foreach ($recommendationsGemini as $recommendation) {
                    $this->createRecommendation($user, $recommendation);
                }

                return $this->getRecommendationsDuJour($user);
            }
        } catch (PrismRateLimitedException $e) {
            Log::warning('Quota Gemini atteint');
            return;
        }
    }

    public function construirePrompt(array $context)
    {
        return "
        Tu es un coach spécialié en neuroscience.
        Voici les données du jour : " . json_encode($context) . "
        Propose exactément 3 recommandations.
        Reponds uniquement au format JSON.
        [
            \"titre\" : \"...\",
            \"description\" : \"...\",
            \"source\" : \"...\",
        ]
        ";
    }

    public function createRecommendation(User $user, array $recommendation)
    {
        try {
            return Recommendation::create([
                "user_id" => $user->id,
                'titre' => $recommendation['titre'],
                'description' => $recommendation['description'],
                'source' => $recommendation['source'],
                'date' => today(),
            ]);
        } catch (Exception $e) {
            Log::error('Erreur survenue à la creation d\'une recommandation', ["erreur" => $e->getMessage()]);
            return;
        }
    }
    public function getRecommendationsDuJour(User $user)
    {
        return Recommendation::where('user_id', $user->id)
            ->whereDate('date', today())
            ->get();
    }
}
