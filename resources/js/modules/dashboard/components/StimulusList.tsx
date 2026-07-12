
import { Stimulus, StimulusCategory } from "../types";

// de logging des stimulus branché.
const stimuli: Stimulus[] = [
    { time: '09:15', category: 'FOCUS', title: 'Deep Work Session', intensity: 3 },
    { time: '08:30', category: 'STRESS', title: 'Réunion imprévue', intensity: 2 },
    { time: '07:45', category: 'RÉCUP', title: 'Cohérence Cardiaque', intensity: 1 },
    { time: '07:00', category: 'SPORT', title: 'Entraînement HIIT', intensity: 4 },
    { time: '06:30', category: 'ROUTINE', title: 'Café & Lecture', intensity: 2 },
];

const categoryStyles: Record<StimulusCategory, { badge: string; bar: string }> = {
    FOCUS: { badge: 'bg-indigo-100 text-indigo-700', bar: 'bg-indigo-600' },
    STRESS: { badge: 'bg-red-100 text-red-700', bar: 'bg-red-500' },
    RÉCUP: { badge: 'bg-emerald-100 text-emerald-700', bar: 'bg-emerald-600' },
    SPORT: { badge: 'bg-violet-100 text-violet-700', bar: 'bg-violet-600' },
    ROUTINE: { badge: 'bg-teal-100 text-teal-700', bar: 'bg-teal-600' },
};

function IntensityBars({ level, colorClass }: { level: number; colorClass: string }) {
    return (
        <div className="flex items-end gap-0.5">
            {[0, 1, 2, 3].map((i) => (
                <span
                    key={i}
                    className={`w-1 rounded-sm ${i < level ? colorClass : 'bg-muted'}`}
                    style={{ height: 6 + i * 3 }}
                />
            ))}
        </div>
    );
}

export function StimulusList() {
    return (
        <div className="divide-y divide-border">
            {stimuli.map((s) => {
                const style = categoryStyles[s.category];
                return (
                    <div key={s.time + s.title} className="flex items-center gap-4 py-3.5">
                        <span className="w-12 shrink-0 font-mono text-xs text-muted-foreground">
                            {s.time}
                        </span>
                        <span
                            className={`shrink-0 rounded-md px-2 py-1 text-[10px] font-semibold tracking-wide ${style.badge}`}
                        >
                            {s.category}
                        </span>
                        <span className="flex-1 text-sm text-foreground">{s.title}</span>
                        <IntensityBars level={s.intensity} colorClass={style.bar} />
                    </div>
                );
            })}
        </div>
    );
}