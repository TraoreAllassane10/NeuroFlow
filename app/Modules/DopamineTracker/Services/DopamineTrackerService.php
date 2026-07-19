<?php

namespace App\Modules\DopamineTracker\Services;

use App\Models\StimulusLog;
use App\Modules\DopamineTracker\Repositories\DopamineTrackerRepository;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class DopamineTrackerService
{


    public function __construct(
        protected DopamineTrackerRepository $dopamineTrackerRepository
    ) {
       
    }

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

        return $this->dopamineTrackerRepository->dataChart($user);
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
