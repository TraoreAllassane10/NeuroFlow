<?php

namespace App\Modules\DopamineTracker\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\DopamineTracker\Requests\CreateStimulusRequest;
use App\Modules\DopamineTracker\Services\DopamineTrackerService;
use Exception;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class DopamineTrackerController extends Controller
{
    public function __construct(
        protected DopamineTrackerService $dopamineTrackerService
    ) {}

    public function index()
    {
        return Inertia::render('dopamineTracker/Index');
    }

    public function store(CreateStimulusRequest $request)
    {
        try {
            $data = $request->validated();

            $this->dopamineTrackerService->createStimulus($data);

            return response()->json(['success' => true, 'message' => 'Stimulus crée avec succès']);
        } catch (Exception $e) {
            Log::error('Une erreur est survenue lors de la creation d\'un stimulus', ["erreur" => $e->getMessage()]);
            return response()->json(['success' => false, 'message' => 'Une erreur est survenue lors de la creation d\'un stimulus']);
        }
    }
}
