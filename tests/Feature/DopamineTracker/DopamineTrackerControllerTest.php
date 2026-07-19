<?php

namespace Tests\Feature\DopamineTracker;

use App\Models\StimulusLog;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class DopamineTrackerControllerTest extends TestCase
{
    use RefreshDatabase;
    public function test_un_utilisateur_peut_creer_un_stimuli(): void
    {
        $user = User::factory()->create();

        $data = [
            "logged_at" => "11:31",
            'label' => "Instagram",
            "categorie" => "telephone",
            "intensite" => 8,
            "type" => "rapide"
        ];

        $response = $this
            ->actingAs($user)
            ->postJson(route('dopamine-tracker.store'), $data);

        $response
            ->assertOk()
            ->assertJson([
                "success" => true
            ]);

        $this
            ->assertDatabaseHas('stimulus_logs', [
                "logged_at" => "11:31",
                'label' => "Instagram",
                "categorie" => "telephone",
                "intensite" => 8,
                "type" => "rapide"
            ]);
    }

    public function test_un_utilisateur_peut_supprimer_un_stimili(): void
    {
        $user = User::factory()->create();
        $stimuli = StimulusLog::factory()->create([
            "user_id" => $user->id
        ]);

        $response = $this
            ->actingAs($user)
            ->delete(route('dopamine-tracker.destroy', $stimuli));

        $response->assertOk();

        $this->assertDatabaseMissing('stimulus_logs', [
            "id" => $stimuli->id
        ]);
    }
}
