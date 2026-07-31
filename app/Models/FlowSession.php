<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FlowSession extends Model
{
    /** @use HasFactory<\Database\Factories\FlowSessionFactory> */
    use HasFactory;

    protected $fillable = [
        'nom_tache',
        'type_session',
        'date',
        'heure_debut',
        'heure_fin',
        'user_id'
    ];

    protected $casts = [
        'date' => 'date',
        // 'heure_debut' => 'time:H:i',
        // 'heure_fin' => 'time:H:i'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
