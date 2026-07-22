<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Auth;

class OnboardingService
{

    public function updateUser(array $data)
    {
        $userId = Auth::user()->id;
        $user = User::find($userId);
        $user->chronotype = $data['chronotype'] ?? null;
        $user->objectif_principal = $data['objectif_principal'] ?? null;

        $user->save();

        return $user;
    }
}
