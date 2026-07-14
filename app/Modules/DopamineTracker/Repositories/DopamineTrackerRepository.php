<?php

namespace App\Modules\DopamineTracker\Repositories;

use App\Models\StimulusLog;

class DopamineTrackerRepository
{
    public function create(array $data)
    {
        return StimulusLog::create($data);
    }
}
