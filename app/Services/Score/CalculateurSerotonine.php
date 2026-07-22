<?php

namespace App\Services\Score;

class CalculateurSerotonine
{
    public function calcule(int $humeur, int $sommeil, int $energie): int
    {
        return ($humeur * 4) + ($energie * 2) + ($sommeil * 4);
    }
}
