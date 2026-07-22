<?php

namespace App\Http\Requests\DailyCheckin;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class CreateDailyCheckinRequest extends FormRequest
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
            "humeur" => ['required', 'numeric'],
            "qualite_sommeil" => ['required', 'numeric'],
            "niveau_energie" => ['required', 'numeric'],
            "note" => ['nullable', 'string'],
        ];
    }
}
