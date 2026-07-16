<?php

namespace App\Modules\DopamineTracker\Services;

use Barryvdh\DomPDF\Facade\Pdf;

class PdfGenerateurService
{
    public function __construct()
    {
        //
    }

    public function build()
    {
        $pdf = Pdf::loadView('pdf.rapport', []);
        return $pdf->download('rapport_dopaminergique.pdf');
    }
}
