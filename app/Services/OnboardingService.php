<?php

namespace App\Services;

use App\Models\User;
use App\Services\DailyCheckinService;
use Illuminate\Support\Facades\Auth;

class OnboardingService
{

    public function __construct(
        protected DailyCheckinService $dailyCheckinService
    ) {}


    public function updateUser(array $data)
    {
        $userId = Auth::user()->id;
        $user = User::find($userId);
        $user->chronotype = $data['chronotype'] ?? null;
        $user->objectif_principal = $data['objectif_principal'] ?? null;

        $user->save();

        $this->dailyCheckinService->createDailyCheckin([
            "humeur" => $data['mood'],
            "qualite_sommeil" => $data['sleepQuality'],
            "niveau_energie" => $data['energyLevel'],
            "notes" => $data['notes'] ?? null
        ]);


        return $user;
    }
}
