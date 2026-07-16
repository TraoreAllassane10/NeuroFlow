<?php

namespace App\Modules\DopamineTracker\Controllers;

use App\Http\Controllers\Controller;
use App\Models\StimulusLog;
use App\Modules\DopamineTracker\Exports\StimulusLogExport;
use App\Modules\DopamineTracker\Requests\CreateStimulusRequest;
use App\Modules\DopamineTracker\Services\DopamineTrackerService;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Maatwebsite\Excel\Excel as MaatwebsiteExcel;
use Maatwebsite\Excel\Facades\Excel;


class DopamineTrackerController extends Controller
{
    public function __construct(
        protected DopamineTrackerService $dopamineTrackerService
    ) {}

    public function index()
    {
        $stimulus = $this->dopamineTrackerService->getStimulusDuJour();
        return Inertia::render('dopamineTracker/Index', ["stimulus" => $stimulus]);
    }

    public function stimulusParDate(Request $request)
    {
        $date = $request->query('date');

        try {
            $stimulus = $this->dopamineTrackerService->getStimulusParDate($date);
            return response()->json(['success' => true, "data" => $stimulus]);
        } catch (Exception $e) {
            Log::error('Une erreur est survenue lors du chargement des stimulus', ["erreur" => $e->getMessage()]);
            return response()->json(['success' => false, 'message' => 'Une erreur est survenue lors du chargement des stimulus']);
        }
    }

    public function show(StimulusLog $stimuli)
    {
        return response()->json(["success" => true, "data" => [
            "id" => $stimuli->id,
            "label" => $stimuli->label,
            "logged_at" => $stimuli->logged_at,
            "categorie" => $stimuli->categorie,
            "intensite" => $stimuli->intensite,
            "type" => $stimuli->type,
            "created_at" => $stimuli->created_at->translatedFormat("l j F Y")
        ]]);
    }

    public function dataChart()
    {
        try {
            $data = $this->dopamineTrackerService->getDataChart();
            return response()->json(['success' => true, "data" => $data]);
        } catch (Exception $e) {
            Log::error('Une erreur est survenue lors du chargement des donnnées pour le graphique', ["erreur" => $e->getMessage()]);
            return response()->json(['success' => false, 'message' => 'Une erreur est survenue lors du chargement des données pour le graphique']);
        }
    }

    public function exportCsv()
    {
        return Excel::download(new StimulusLogExport(), "Ma_Dopamine_Tracker.csv", MaatwebsiteExcel::CSV);
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

    public function destroy(StimulusLog $stimuli)
    {
        $stimuliSupprime =  $this->dopamineTrackerService->deleteStimulus($stimuli);

        if ($stimuliSupprime) {
            return response()->json(["success" => true, "message" => "Stimuli supprimé avec succès"]);
        } else {
            return response()->json(["success" => false, "message" => "La suppression a echoué ! Veuillez ressayer"]);
        }
    }
}
