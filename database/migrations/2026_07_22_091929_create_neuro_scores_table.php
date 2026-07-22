<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('neuro_scores', function (Blueprint $table) {
            $table->id();

            $table->timestamp('date');
            $table->integer('score_dopamine');
            $table->integer('score_cortisol');
            $table->integer('score_serotonine');
            $table->integer('score_oxytocine');
            $table->integer('score_global');
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('neuro_scores');
    }
};
