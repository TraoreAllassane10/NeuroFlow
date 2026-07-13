const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
const hours = Array.from({ length: 13 }, (_, i) => i + 8); // 08:00 -> 20:00
const HOUR_HEIGHT = 64; // px

type EventVariant = 'mint' | 'sync' | 'session' | 'busy';

interface FlowEvent {
    day: number; // 0 = Lun ... 6 = Dim
    start: number; // heure décimale
    end: number;
    label?: string;
    variant: EventVariant;
    splitAt?: number; // pour 'session' : heure de transition indigo -> teal
}

// À remplacer par les vrais événements du planning (props Inertia).
const events: FlowEvent[] = [
    { day: 0, start: 11, end: 12, variant: 'mint' },
    { day: 1, start: 12, end: 13, label: 'Sync Team', variant: 'sync' },
    { day: 2, start: 9, end: 11, label: '09:00 - 10:00', variant: 'session', splitAt: 10 },
    { day: 3, start: 12, end: 13.5, variant: 'busy' },
];

function formatHour(h: number) {
    const hh = Math.floor(h);
    const mm = Math.round((h - hh) * 60);
    return `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`;
}

function FlowEventBlock({ event, startHour }: { event: FlowEvent; startHour: number }) {
    const top = (event.start - startHour) * HOUR_HEIGHT;
    const height = (event.end - event.start) * HOUR_HEIGHT;

    if (event.variant === 'session') {
        const splitHeight = ((event.splitAt ?? event.end) - event.start) * HOUR_HEIGHT;
        return (
            <div
                className="absolute inset-x-1 flex flex-col overflow-hidden rounded-md shadow-sm"
                style={{ top, height }}
            >
                <div
                    className="flex items-center justify-center bg-indigo-700 px-1 text-center text-[11px] leading-tight font-medium text-white"
                    style={{ height: splitHeight }}
                >
                    {event.label}
                </div>
                <div className="flex-1 bg-teal-500/70" />
            </div>
        );
    }

    if (event.variant === 'sync') {
        return (
            <div
                className="absolute inset-x-1 rounded-md border border-border bg-muted px-2 py-1 text-[11px] shadow-sm"
                style={{ top, height }}
            >
                <p className="truncate font-medium text-foreground">{event.label}</p>
                <p className="text-muted-foreground">
                    {formatHour(event.start)} - {formatHour(event.end)}
                </p>
            </div>
        );
    }

    if (event.variant === 'busy') {
        return <div className="absolute inset-x-1 rounded-md bg-muted" style={{ top, height }} />;
    }

    // mint
    return <div className="absolute inset-x-1 rounded-md bg-emerald-100" style={{ top, height }} />;
}

export function WeekCalendar({ todayIndex = 2 }: { todayIndex?: number }) {
    const startHour = hours[0];

    return (
        <div className="overflow-hidden rounded-xl border border-border/60 bg-card">
            {/* En-tête jours */}
            <div className="grid grid-cols-[72px_repeat(7,1fr)] border-b border-border">
                <div className="flex items-center justify-center py-3 font-mono text-xs text-muted-foreground">
                    UTC+1
                </div>
                {days.map((d, i) => (
                    <div
                        key={d}
                        className={`flex items-center justify-center py-3 text-sm font-medium ${
                            i === todayIndex ? 'bg-muted text-foreground' : 'text-muted-foreground'
                        }`}
                    >
                        {d}
                    </div>
                ))}
            </div>

            {/* Grille horaire */}
            <div className="max-h-[560px] overflow-y-auto">
                <div className="grid grid-cols-[72px_repeat(7,1fr)]">
                    <div>
                        {hours.map((h) => (
                            <div
                                key={h}
                                style={{ height: HOUR_HEIGHT }}
                                className="border-b border-border/60 pt-1 text-center font-mono text-xs text-muted-foreground"
                            >
                                {String(h).padStart(2, '0')}:00
                            </div>
                        ))}
                    </div>

                    {days.map((d, dayIndex) => (
                        <div
                            key={d}
                            className={`relative border-l border-border/60 ${
                                dayIndex === todayIndex ? 'bg-muted/40' : ''
                            }`}
                        >
                            {hours.map((h) => (
                                <div
                                    key={h}
                                    style={{ height: HOUR_HEIGHT }}
                                    className="border-b border-border/60"
                                />
                            ))}

                            {events
                                .filter((e) => e.day === dayIndex)
                                .map((event) => (
                                    <FlowEventBlock
                                        key={`${event.day}-${event.start}-${event.variant}`}
                                        event={event}
                                        startHour={startHour}
                                    />
                                ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}