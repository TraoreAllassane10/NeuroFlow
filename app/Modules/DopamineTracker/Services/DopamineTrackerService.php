<?php

namespace App\Modules\DopamineTracker\Services;

use App\Modules\DopamineTracker\Repositories\DopamineTrackerRepository;
use Carbon\Carbon;

class DopamineTrackerService
{

    public function __construct(
        protected DopamineTrackerRepository $dopamineTrackerRepository
    ) {}

    public function createStimulus(array $data)
    {
        return $this->dopamineTrackerRepository->create($data);
    }
}
