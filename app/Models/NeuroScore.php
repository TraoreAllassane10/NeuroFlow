<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class NeuroScore extends Model
{
    /** @use HasFactory<\Database\Factories\NeuroScoreFactory> */
    use HasFactory;

    protected $fillable = [
        'date',
        'score_dopamine',
        'score_cortisol',
        'score_serotonine',
        'score_oxytocine',
        'score_global',
        'user_id'
    ];

    protected $casts = [
        'date' => 'datetime'
    ];

    public function user() : BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
