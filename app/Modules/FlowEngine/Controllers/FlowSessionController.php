<?php

namespace App\Modules\FlowEngine\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\FlowEngine\Exceptions\FlowSessionExistDejaException;
use App\Modules\FlowEngine\Requests\CreateFlowSession;
use App\Modules\FlowEngine\Services\FlowSessionService;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class FlowSessionController extends Controller
{
    public function __construct(protected FlowSessionService $flowSessionService) {}

    public function index()
    {
        return Inertia::render('flowEngine/Index');
    }

    public function store(CreateFlowSession $createFlowSession)
    {
        try {
            $data = $createFlowSession->validated();
            $user = Auth::user();

            $session = $this->flowSessionService->createSession($user, $data);

            return response()->json([
                'success' => true,
                'message' => 'Session créée avec succès.',
                'data' => $session,
            ], 201);
        } catch (FlowSessionExistDejaException $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 409);
        }
    }
}
