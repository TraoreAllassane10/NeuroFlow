import {
    BedDouble,
    Briefcase,
    Clapperboard,
    Gamepad2,
    GraduationCap,
    MoreHorizontal,
    ShoppingCart,
    Smartphone,
    Swords,
    UtensilsCrossed,
} from 'lucide-react';
import { Category, WeeklyDopamine } from '../types';

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

// Les heures affichées sur le timeline
export const hourMarks = [0, 4, 8, 12, 16, 20, 24];

export const dataChart: WeeklyDopamine[] = [
    { day: "Lun", rapide: 6, lente: 2 },
    { day: "Mar", rapide: 3, lente: 5 },
    { day: "Mer", rapide: 7, lente: 1 },
    { day: "Jeu", rapide: 2, lente: 6 },
    { day: "Ven", rapide: 5, lente: 4 },
    { day: "Sam", rapide: 4, lente: 5 },
    { day: "Dim", rapide: 1, lente: 8 },
];