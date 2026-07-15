<?php

namespace App\Modules\DopamineTracker\Exports;

use App\Models\StimulusLog;
use Illuminate\Support\Facades\Auth;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithCustomCsvSettings;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Override;

class StimulusLogExport implements FromCollection, WithHeadings, WithMapping, WithCustomCsvSettings
{
    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        $user = Auth::user();
        return StimulusLog::where('user_id', $user->id)->orderByDesc("created_at")->get();
    }

    #[Override]
    public function headings(): array
    {
        return ["Date", "Heure", "Description", "Categorie", "type", "intensite"];
    }

    #[Override]
    public function map($stimulis): array
    {
        return [
            $stimulis->created_at->translatedFormat('l j F Y'),
            $stimulis->logged_at,
            $stimulis->label,
            $stimulis->categorie,
            $stimulis->type,
            $stimulis->intensite,
        ];
    }

    #[Override]
    public function getCsvSettings(): array
    {
        return [
            "delimiter" => ';',
        ];
    }
}
