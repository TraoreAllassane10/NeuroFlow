<?php

namespace App\Services;

use App\Models\NeuroScore;
use App\Services\Score\CalculateurCortisol;
use App\Services\Score\CalculateurDopamine;
use App\Services\Score\CalculateurOcytocine;
use App\Services\Score\CalculateurSerotonine;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class NeuroScoreService
{

    public function __construct(
        protected CalculateurDopamine $calculateurDopamine,
        protected CalculateurCortisol $calculateurCortisol,
        protected CalculateurSerotonine $calculateurSerotonine,
        protected CalculateurOcytocine $calculateurOcytocine
    ) {}

    public function excute(int $humeur, int $sommeil, int $energie)
    {
        $scoreDopamine = $this->calculateurDopamine->calcule($humeur, $sommeil, $energie);
        $scoreCortisol = $this->calculateurCortisol->calcule($humeur, $sommeil, $energie);
        $scoreSerotonine = $this->calculateurSerotonine->calcule($humeur, $sommeil, $energie);
        $scoreOxytocine = $this->calculateurOcytocine->calcule($humeur, $sommeil, $energie);

        $scoreGlobal = ($scoreDopamine + $scoreCortisol + $scoreSerotonine + $scoreOxytocine) / 4;

        $date = Carbon::now();
        $user = Auth::user();

       return NeuroScore::create([
            "date" => $date,
            'score_dopamine' => $scoreDopamine,
            'score_cortisol' => $scoreCortisol,
            'score_serotonine' => $scoreSerotonine,
            'score_oxytocine' => $scoreOxytocine,
            'score_global' => $scoreGlobal,
            'user_id' => $user->id
        ]);
    }
}
