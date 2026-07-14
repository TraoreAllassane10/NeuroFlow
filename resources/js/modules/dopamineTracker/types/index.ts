import { LucideIcon } from 'lucide-react';

export interface Category {
    key: string;
    label: string;
    icon: LucideIcon;
}

export interface Stimulus {
    id: number;
    categorie: string;
    label: string;
    intensite: number;
    type: string;
    logged_at: string;
    created_at?: string;
}

// Type des données du chart en barre empilee
export interface WeeklyDopamine {
    day: string;
    rapide: number;
    lente: number;
}
