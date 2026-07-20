<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class StimulusLog extends Model
{
    /** @use HasFactory<\Database\Factories\StimulusLogFactory> */
    use HasFactory;

    protected $fillable = ["logged_at", "label", "categorie", "intensite", "type", "user_id"];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
