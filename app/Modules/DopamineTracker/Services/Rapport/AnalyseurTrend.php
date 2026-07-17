<?php

namespace App\Modules\DopamineTracker\Services\Rapport;

use App\Models\User;
use App\Modules\DopamineTracker\Repositories\DopamineTrackerRepository;

class AnalyseurTrend
{

    public function __construct(
        protected DopamineTrackerRepository $dopamineTrackerRepository
    ) {}

    public function execute(User $user)
    {
        return $this->dopamineTrackerRepository->dataChart($user);
    }
}
