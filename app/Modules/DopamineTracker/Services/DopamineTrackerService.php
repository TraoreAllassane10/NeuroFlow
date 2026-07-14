<?php

namespace App\Modules\DopamineTracker\Services;

use App\Modules\DopamineTracker\Repositories\DopamineTrackerRepository;
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

    public function createStimulus(array $data)
    {
        $user = Auth::user();
        $data['user_id'] = $user->id;

        return $this->dopamineTrackerRepository->create($data);
    }
}
