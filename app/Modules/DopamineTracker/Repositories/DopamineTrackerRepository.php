<?php

namespace App\Modules\DopamineTracker\Repositories;

use App\Models\StimulusLog;
use App\Models\User;
use Carbon\Carbon;

class DopamineTrackerRepository
{
    public function stimulusDuJour(User $user)
    {
        return StimulusLog::whereDate('created_at', Carbon::today())
            ->where("user_id", $user->id)
            ->get();
    }

    public function stimulusParDate(User $user, Carbon $date)
    {
        return StimulusLog::whereDate('created_at', $date)
            ->where("user_id", $user->id)
            ->get();
    }

    public function create(array $data)
    {
        return StimulusLog::create($data);
    }
}
