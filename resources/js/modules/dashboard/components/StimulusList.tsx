import { Stimulus } from '@/modules/dopamineTracker/types';

const TypeStyle: Record<
    'rapide' | 'lente' | any,
    { badge: string; bar: string }
> = {
    rapide: { badge: 'bg-red-100 text-red-700', bar: 'bg-red-600' },
    lente: { badge: 'bg-green-100 text-green-700', bar: 'bg-green-500' },
};

function IntensityBars({
    level,
    colorClass,
}: {
    level: number;
    colorClass: string;
}) {
    return (
        <div className="flex items-end gap-0.5">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <span
                    key={i}
                    className={`w-1 rounded-sm ${i < level ? colorClass : 'bg-muted'}`}
                    style={{ height: 3 + i * 3 }}
                />
            ))}
        </div>
    );
}

export function StimulusList({
    recent_stimuli,
}: {
    recent_stimuli: Stimulus[];
}) {
    return (
        <div className="divide-y divide-border">
            {recent_stimuli.map((s) => {
                const style = TypeStyle[s.type];
                return (
                    <div
                        key={s.logged_at + s.label}
                        className="flex items-center gap-4 py-3.5"
                    >
                        <span className="w-12 shrink-0 font-mono text-xs text-muted-foreground">
                            {s.logged_at}
                        </span>
                        <span
                            className={`shrink-0 rounded-md px-2 py-1 text-[10px] font-semibold tracking-wide ${style.badge}`}
                        >
                            {s.categorie}
                        </span>
                        <span className="flex-1 text-sm text-foreground">
                            {s.label}
                        </span>
                        <IntensityBars
                            level={s.intensite}
                            colorClass={style.bar}
                        />
                    </div>
                );
            })}
        </div>
    );
}
