<?php

namespace App\Modules\DopamineTracker\Services;

use App\Models\StimulusLog;
use App\Modules\DopamineTracker\Repositories\DopamineTrackerRepository;
use Carbon\Carbon;
use Carbon\CarbonPeriod;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class DopamineTrackerService
{


    public function __construct(
        protected DopamineTrackerRepository $dopamineTrackerRepository
    ) {}

    public function getStimulusDuJour()
    {
        $user = Auth::user();
        return $this->dopamineTrackerRepository->stimulusDuJour($user);
    }

    public function getStimulusParDate(string $date)
    {
        $user = Auth::user();

        //Formattage de la date en carbon
        $formattedDate = Carbon::parse($date);

        return $this->dopamineTrackerRepository->stimulusParDate($user, $formattedDate);
    }

    // Charge les données pour l'affichage du chart
    public function getDataChart()
    {
        $user = Auth::user();

        // return $this->dopamineTrackerRepository->dataChart($user);

        $donneesGroupees = $this->dopamineTrackerRepository->dataChart($user);
        Log::info($donneesGroupees);

        $resultat = collect(CarbonPeriod::create(Carbon::now()->subDays(29), now()))
            ->map(function (Carbon $date) use ($donneesGroupees) {
                // Pour eviter de faire une condition ternaire avec $donneesGroupees[$date->toDateString()], car cela posera un problème
                $groupe = $donneesGroupees->get($date->toDateString());

                return [
                    "day" => $date->translatedFormat('D'),
                    "rapide" => $groupe ? $donneesGroupees[$date->toDateString()]->where("type", "rapide")->sum('intensite') : 0,
                    "lente" => $groupe ? $donneesGroupees[$date->toDateString()]->where("type", "lente")->sum('intensite') : 0
                ];
            });

        return $resultat;
    }

    public function getNombreStimuliParJour()
    {
        $nombres = $this->dopamineTrackerRepository->nombreStimuliParJour();

        $resultat = collect(CarbonPeriod::create(Carbon::now()->subDays(27), now()))
            ->map(function (Carbon $date) use ($nombres) {
                return $nombres[$date->toDateString()] ?? 0;
            });

        return [
            "data" => $resultat,
            "nombre_jour_activite" => $nombres->count()
        ];
    }

    public function getRecentStimuli()
    {
        return $this->dopamineTrackerRepository->RecentStimuli();
    }

    public function createStimulus(array $data)
    {
        $user = Auth::user();
        $data['user_id'] = $user->id;

        return $this->dopamineTrackerRepository->create($data);
    }

    public function deleteStimulus(StimulusLog $stimulusLog)
    {
        try {
            return  $stimulusLog->delete();
        } catch (Exception $e) {
            Log::info('Erreur survenue lors de la suppresion d\'un stimulis', ["error" => $e->getMessage()]);
        }
    }
}
