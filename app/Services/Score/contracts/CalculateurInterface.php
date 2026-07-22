<?php

namespace App\Services\Score\contracts;

interface CalculateurInterface {
   public function calcule(int $humeur, int $sommeil, int $energie): int;
}