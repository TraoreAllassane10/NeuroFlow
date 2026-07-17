<?php

namespace App\Modules\DopamineTracker\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\DopamineTracker\Services\PdfGenerateurService;

class RapportController extends Controller
{
    public function __construct(
        protected PdfGenerateurService $pdfGenerateurService
    ) {}
    public function generer()
    {
        return $this->pdfGenerateurService->build();
    }
}
