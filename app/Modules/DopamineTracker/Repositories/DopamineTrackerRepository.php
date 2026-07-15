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

    public function dataChart(User $user)
    {
        return StimulusLog::where("user_id", $user->id)
            ->whereDate('created_at', '>=', Carbon::now()->subDays(29))
            ->get()
            ->groupBy(fn($log) => $log->created_at->toDateString())
            ->map(function ($group) {
                return [
                    "day" => $group->first()->created_at->translatedFormat('D'),
                    "rapide" => $group->where("type", "rapide")->sum('intensite'),
                    "lente" => $group->where("type", "lente")->sum('intensite')
                ];
            })
            ->values();
    }

    public function create(array $data)
    {
        return StimulusLog::create($data);
    }
}
