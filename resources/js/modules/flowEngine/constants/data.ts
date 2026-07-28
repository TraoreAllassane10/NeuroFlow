import { FlowEvent } from '../types';

export const jours = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
export const heures = Array.from({ length: 24 }, (_, i) => i + 0);
export const HAUTEUR_HEURE = 64;

export const evenements: FlowEvent[] = [
    { day: 0, start: 11, end: 12, variant: 'mint' },
    { day: 1, start: 12, end: 13, label: 'Sync Team', variant: 'sync' },
    {
        day: 2,
        start: 9,
        end: 11,
        label: '09:00 - 10:00',
        variant: 'session',
        splitAt: 10,
    },
    { day: 3, start: 12, end: 13.5, variant: 'busy' },
];
