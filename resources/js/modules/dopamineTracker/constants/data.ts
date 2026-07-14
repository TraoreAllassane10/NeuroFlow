import {
    BedDouble,
    Briefcase,
    Clapperboard,
    Gamepad2,
    GraduationCap,
    Minimize2,
    MoreHorizontal,
    ShoppingCart,
    Smartphone,
    Swords,
    UtensilsCrossed,
} from 'lucide-react';
import { Category, TimelineEvent } from '../types';

export const categories: Category[] = [
    { key: 'sommeil', label: 'Sommeil', icon: BedDouble },
    { key: 'nourriture', label: 'Nourriture', icon: UtensilsCrossed },
    { key: 'jeu', label: 'Jeu vidéo', icon: Gamepad2 },
    { key: 'sport', label: 'Sport', icon: Swords },
    { key: 'education', label: 'Éducation', icon: GraduationCap },
    { key: 'achats', label: 'Achats', icon: ShoppingCart },
    { key: 'telephone', label: 'Téléphone', icon: Smartphone },
    { key: 'divertissement', label: 'Divertissement', icon: Clapperboard },
    { key: 'travail', label: 'Travail', icon: Briefcase },
    { key: 'autre', label: 'Autre', icon: MoreHorizontal },
];

// Données mockable des logs
export const events: TimelineEvent[] = [
    { hour: 4, type: 'fast', icon: Gamepad2, label: 'Jeu vidéo' },
    { hour: 12, type: 'cluster', icon: Minimize2, label: 'Plusieurs activités' },
    { hour: 20, type: 'fast', icon: Smartphone, label: 'Téléphone' },
];

// Les heures affichées sur le timeline
export const hourMarks = [0, 4, 8, 12, 16, 20, 24];