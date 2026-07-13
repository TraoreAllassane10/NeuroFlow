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
    type LucideIcon,
} from 'lucide-react';

interface Category {
    key: string;
    label: string;
    icon: LucideIcon;
}

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

interface CategoryPickerProps {
    value: string;
    onChange: (key: string) => void;
}

export function CategoryPicker({ value, onChange }: CategoryPickerProps) {
    return (
        <div className="grid grid-cols-5 gap-3 sm:grid-cols-10">
            {categories.map((cat) => {
                const active = value === cat.key;
                return (
                    <button
                        key={cat.key}
                        type="button"
                        title={cat.label}
                        aria-pressed={active}
                        onClick={() => onChange(cat.key)}
                        className={`flex aspect-square items-center justify-center rounded-lg border transition-colors ${
                            active
                                ? 'border-indigo-300 bg-indigo-100 text-primary'
                                : 'border-border text-muted-foreground hover:bg-muted'
                        }`}
                    >
                        <cat.icon className="size-5" />
                    </button>
                );
            })}
        </div>
    );
}