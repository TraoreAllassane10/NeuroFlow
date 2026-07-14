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
        Schema::create('stimulus_logs', function (Blueprint $table) {
            $table->id();

            $table->string("logged_at");
            $table->string('label');
            $table->string('categorie');
            $table->integer('intensite');
            $table->enum('type', ["lente", "rapide"]);
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stimulus_logs');
    }
};
