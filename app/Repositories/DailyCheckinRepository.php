<?php

namespace App\Repositories;

use App\Models\DailyCheckin;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class DailyCheckinRepository
{

    public function dailyCheckinExist()
    {
        $user = Auth::user();

        return DailyCheckin::whereToday('date')
            ->where('user_id', $user->id)
            ->exists();
    }

    public function create(array $data)
    {
        return DailyCheckin::create($data);
    }
}
