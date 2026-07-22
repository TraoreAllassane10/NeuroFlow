<?php

namespace App\Http\Controllers;

use App\Http\Requests\DailyCheckin\CreateDailyCheckinRequest;
use App\Services\DailyCheckinService;

class DailyCheckinController extends Controller
{
    public function __construct(
        protected DailyCheckinService $dailyCheckinService
    ) {}

    public function store(CreateDailyCheckinRequest $request)
    {
        $data = $request->validated();

        $data = $this->dailyCheckinService->createDailyCheckin($data);

        if ($data['success']) {
            if ($data['checkin_du_jour'] && $data['neuro_score_du_jour']) {
                return response()->json(["success" => true, "message" => "Checkin du jour effectué avec succès !"]);
            } else if ($data['checkin_du_jour'] && !$data['neuro_score_du_jour']) {

                return response()->json(["success" => false, "message" => "Erreur suvenue lors du calcule des scores"]);
            }
        } else if ($data['success'] === false) {
            return response()->json(["success" => false, "message" => "Vous avez dejà fait le checkin d'aujourd'hui !"]);
        } else {
            return response()->json(["success" => false, "message" => "Erreur suvenue lors du l'enregistrement du checkin"]);
        }
    }
}
