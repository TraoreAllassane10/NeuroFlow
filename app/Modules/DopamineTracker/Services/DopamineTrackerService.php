<?php

namespace App\Modules\DopamineTracker\Services;

use App\Modules\DopamineTracker\Repositories\DopamineTrackerRepository;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

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

    public function createStimulus(array $data)
    {
        $user = Auth::user();
        $data['user_id'] = $user->id;

        return $this->dopamineTrackerRepository->create($data);
    }
}
