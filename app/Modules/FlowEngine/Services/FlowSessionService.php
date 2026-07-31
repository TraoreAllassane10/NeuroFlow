<?php

namespace App\Modules\FlowEngine\Services;

use App\Models\FlowSession;
use App\Models\User;
use App\Modules\FlowEngine\Exceptions\FlowSessionExistDejaException;
use Carbon\Carbon;

class FlowSessionService
{

    public function getSessions(User $user)
    {
        return FlowSession::where('user_id', $user->id)
            ->whereBetween('date', [now()->startOfWeek(), now()->endOfWeek()])
            ->get()
            ->map(function ($session) {
                return [
                    "id" => $session->id,
                    "nom_tache" => $session->nom_tache,
                    "type_session" => $session->type_session,
                    "jour" => $session->date->translatedFormat('D'),
                    "date" => $session->date,
                    "heure_debut" => $session->heure_debut,
                    "heure_fin" => $session->heure_fin,
                ];
            });
    }

    public function createSession(User $user, array $data)
    {
        // Verifie si la plage est occupée
        $plageOccupee = $this->placeOccupee($user, $data);

        // Si la plage est occupée
        if ($plageOccupee) {
            throw new FlowSessionExistDejaException('Une session existe déjà sur cette place horaire ! ');
        }

        return FlowSession::create([
            ...$data,
            'date' => Carbon::parse($data['date']),
            'heure_debut' => Carbon::parse($data['heure_debut'])->format('H:i'),
            'heure_fin' => Carbon::parse($data['heure_fin'])->format('H:i'),
            'user_id' => $user->id
        ]);
    }

    public function placeOccupee(User $user, array $data)
    {
        return FlowSession::where('user_id', $user->id)
            ->where('date', Carbon::parse($data['date']))
            ->where('heure_debut', $data['heure_debut'])
            ->where('heure_fin', $data['heure_fin'])
            ->exists();
    }
}
