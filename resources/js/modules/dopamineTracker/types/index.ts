import { LucideIcon } from "lucide-react";

export interface Category {
    key: string;
    label: string;
    icon: LucideIcon;
}

export interface TimelineEvent {
    hour: number;
    type: 'fast' | 'cluster';
    icon: LucideIcon;
    label: string;
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