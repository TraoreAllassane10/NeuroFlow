import { evenements, HAUTEUR_HEURE, heures, jours } from "../constants/data";
import { FlowEventBlock } from "./flow-event-block";

export function WeekCalendar({ todayIndex = 2 }: { todayIndex?: number }) {
    const premiereHeure = heures[0];

    return (
        <div className="overflow-hidden rounded-xl border border-border/60 bg-card">
            {/* En-tête jours */}
            <div className="grid grid-cols-[72px_repeat(7,1fr)] border-b border-border">
                <div className="flex items-center justify-center py-3 font-mono text-xs text-muted-foreground">
                    J/H
                </div>
                {jours.map((d, i) => (
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
            <div className="max-h-140 overflow-y-auto">
                <div className="grid grid-cols-[72px_repeat(7,1fr)]">
                    <div>
                        {heures.map((h) => (
                            <div
                                key={h}
                                style={{ height: HAUTEUR_HEURE }}
                                className="border-b border-border/60 pt-1 text-center font-mono text-xs text-muted-foreground"
                            >
                                {String(h).padStart(2, '0')}:00
                            </div>
                        ))}
                    </div>

                    {jours.map((d, dayIndex) => (
                        <div
                            key={d}
                            className={`relative border-l border-border/60 ${
                                dayIndex === todayIndex ? 'bg-muted/40' : ''
                            }`}
                        >
                            {heures.map((h) => (
                                <div
                                    key={h}
                                    style={{ height: HAUTEUR_HEURE }}
                                    className="border-b border-border/60"
                                />
                            ))}

                            {evenements
                                .filter((e) => e.day === dayIndex)
                                .map((event) => (
                                    <FlowEventBlock
                                        key={`${event.day}-${event.start}-${event.variant}`}
                                        event={event}
                                        startHour={premiereHeure}
                                    />
                                ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}