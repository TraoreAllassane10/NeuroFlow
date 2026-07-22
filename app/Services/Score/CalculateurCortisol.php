<?php

namespace App\Services\Score;

class CalculateurCortisol
{
    public function calcule(int $humeur, int $sommeil, int $energie): int
    {
        return ($humeur * 3) + ($energie * 3) + ($sommeil * 4);
    }
}
