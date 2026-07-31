<?php

namespace App\Modules\FlowEngine\Requests;


use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class CreateFlowSession extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nom_tache' => ['required', 'string'],
            'type_session' => ['required', 'string'],
            'date' => ['required'],
            'heure_debut' => ['required'],
            'heure_fin' => ['required'],
        ];
    }
}
