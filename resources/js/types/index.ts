export type * from './auth';
export type * from './navigation';
export type * from './ui';

export interface NeuroScore {
    score_dopamine: number;
    score_cortisol: number;
    score_serotonine: number;
    score_oxytocine: number;
    score_global: number;
}

export interface Question {
    question: string;
    reponses: { key: string; label: string }[];
}

export interface CreateDailyData {
    humeur: number;
    qualite_sommeil: number;
    niveau_energie: number;
    note?: string;
}