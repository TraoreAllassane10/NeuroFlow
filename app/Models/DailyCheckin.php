<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DailyCheckin extends Model
{
    /** @use HasFactory<\Database\Factories\DailyCheckinFactory> */
    use HasFactory;

    protected $fillable = ['date', 'humeur', 'qualite_sommeil', 'niveau_energie', 'user_id'];
    protected $casts = ['date' => 'datetime'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
