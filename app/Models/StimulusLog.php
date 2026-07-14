<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StimulusLog extends Model
{
    /** @use HasFactory<\Database\Factories\StimulusLogFactory> */
    use HasFactory;

    protected $fillable = ["logged_at", "label", "categorie", "intensite", "type", "user_id"];
}
