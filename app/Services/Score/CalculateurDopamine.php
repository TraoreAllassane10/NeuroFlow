<?php

namespace App\Services\Score;

use App\Services\Score\contracts\CalculateurInterface;

class CalculateurDopamine implements CalculateurInterface
{

    public function calcule(int $humeur, int $sommeil, int $energie): int
    {
        return ($humeur * 4) + ($energie * 4) + ($sommeil * 2);
    }
}
