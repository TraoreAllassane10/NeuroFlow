<?php

namespace App\Modules\DopamineTracker\Repositories;

use App\Models\StimulusLog;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

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
            // Created_at est un timestamp complet avec heure/min donc on doit grouper seulement par date d'où ignorer l'heure/min
            ->groupBy(fn($log) => $log->created_at->toDateString());
    }

    public function create(array $data)
    {
        return StimulusLog::create($data);
    }

    public function RecentStimuli()
    {
        $user = Auth::user();

        return StimulusLog::whereToday('created_at')
            ->where('user_id', $user->id)
            ->latest()
            ->limit(5)
            ->get();
    }

    public function nombreStimuliParJour()
    {
        $user = Auth::user();
        return StimulusLog::whereDate('created_at', '>=', Carbon::now()->subDays(27))
            ->where('user_id', $user->id)
            ->get()
            // Created_at est un timestamp complet avec heure/min donc on doit grouper seulement par date d'où ignorer l'heure/min
            ->groupBy(fn($stimuli) => $stimuli->created_at->toDateString())
            ->map(fn($group) => $group->count());
    }
}
