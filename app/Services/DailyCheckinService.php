<?php

namespace App\Services;

use App\Repositories\DailyCheckinRepository;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class DailyCheckinService
{
    public function __construct(
        protected DailyCheckinRepository $dailyCheckinRepository,
        protected NeuroScoreService $neuroScoreService
    ) {}

    public function createDailyCheckin(array $data)
    {
        try {
            $user = Auth::user();

            $checkinDuJourExiste = $this->verifieCheckinExist();

            if (!$checkinDuJourExiste) {
                $data["date"] = Carbon::now();
                $data['user_id'] = $user->id;
                $data['note'] = $data['note'] ?? null;

                return DB::transaction(function () use ($data) {
                    // Enregistrement du checkin du jour
                    $checkinDuJour = $this->dailyCheckinRepository->create($data);

                    // Calcul des scores
                    $neuroScoreDuJour =  $this->neuroScoreService->excute($checkinDuJour->humeur, $checkinDuJour->qualite_sommeil, $checkinDuJour->niveau_energie);

                    return [
                        "success" => true,
                        "checkin_du_jour" =>  $checkinDuJour,
                        "neuro_score_du_jour" => $neuroScoreDuJour
                    ];
                });
            } else {
                return [
                    "success" => false,
                ];
            }
        } catch (Exception $e) {
            Log::error("Erreur survenue lors de la creation d'un checkin quotidien", ['error' => $e->getMessage()]);
        }
    }

    public function verifieCheckinExist()
    {
        return $this->dailyCheckinRepository->dailyCheckinExist();
    }
}
