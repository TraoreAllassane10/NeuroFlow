<?php

namespace App\Services\Score;

class CalculateurOcytocine
{
     public function calcule(int $humeur, int $sommeil, int $energie): int
    {
        return ($humeur * 6) + ($energie * 2) + ($sommeil * 2);
    }
}
