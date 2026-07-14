import { categories } from '../constants/data';

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
