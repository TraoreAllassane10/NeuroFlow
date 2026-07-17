<?php

namespace App\Modules\DopamineTracker\Services;

use App\Modules\DopamineTracker\Services\Rapport\RapportManager;
use Barryvdh\DomPDF\Facade\Pdf;

class PdfGenerateurService
{
    public function __construct(
        protected RapportManager $rapportManager
    ) {}

    public function build()
    {
        $data = $this->rapportManager->orchestrer();

        $pdf = Pdf::loadView('rapport.index', ['data' => $data]);
        return $pdf->download('rapport_dopaminergique.pdf');
    }
}
