<?php

namespace App\Repositories;

use App\Models\DailyCheckin;

class DailyCheckinRepository
{

    public function create(array $data)
    {
        return DailyCheckin::create($data);
    }
}
