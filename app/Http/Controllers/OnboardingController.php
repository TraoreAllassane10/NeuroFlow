<?php

namespace App\Http\Controllers;

use App\Enums\ChronotypeEnum;
use App\Services\OnboardingService;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class OnboardingController extends Controller
{
    public function __construct(
        protected OnboardingService $onboardingService
    ) {}

    public function index()
    {
        return Inertia::render('onboarding');
    }

    public function update(Request $request)
    {
        $data = $request->validate([
            "age" => "required|string",
            "objectif_principal" => "required|string",
            "chronotype" => ["required", Rule::in(ChronotypeEnum::cases())],
            "mood" => "required",
            "sleepQuality" => "required",
            "energyLevel" => "required",
            "notes" => "nullable"
        ]);

        $this->onboardingService->updateUser($data);

        return response()->json(["success" => true, "message" => "Le profil utilisateur a été mis à jour"]);
    }
}
