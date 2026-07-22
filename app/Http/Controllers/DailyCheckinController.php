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

        $this->dailyCheckinService->createDailyCheckin($data);

        return response()->json(["success" => true, "message" => "Checkin du jour effectué avec succès !"]);
    }
}
