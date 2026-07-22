<?php

namespace App\Services;

use App\Repositories\DailyCheckinRepository;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class DailyCheckinService
{
    public function __construct(
        protected DailyCheckinRepository $dailyCheckinRepository
    ) {}

    public function createDailyCheckin(array $data)
    {
        try {
            $data["date"] = Carbon::now();
            $data['user_id'] = Auth::user()->id;
            $data['note'] = $data['note'] ?? null;

            return $this->dailyCheckinRepository->create($data);
        } catch (Exception $e) {
            Log::error("Erreur survenue lors de la creation d'un checkin quotidien", ['error' => $e->getMessage()]);
        }
    }
}
