<?php

namespace App\Modules\DopamineTracker\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CreateStimulusRequest extends FormRequest
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
            "logged_at" => ['required'],
            "label" => ['required', 'string'],
            "categorie" => ['required', 'string'],
            "intensite" => ['required', 'numeric'],
            "type" => ['required', 'string', Rule::in('lente', 'rapide')]
        ];
    }

    /**
     * Get custom error messages for validator errors.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'label.required' => 'Le champ label est requis.',
            'label.string' => 'Le champ label doit être une chaîne de caractères.',
            'categorie.required' => 'Le champ catégorie est requis.',
            'categorie.string' => 'Le champ catégorie doit être une chaîne de caractères.',
            'intensite.required' => 'Le champ intensité est requis.',
            'intensite.numeric' => 'Le champ intensité doit être un nombre.',
            'type.required' => 'Le champ type est requis.',
            'type.string' => 'Le champ type doit être une chaîne de caractères.',
            'type.in' => 'Le champ type doit être soit rapide, soit lente'
        ];
    }
}
