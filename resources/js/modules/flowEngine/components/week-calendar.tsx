import { HAUTEUR_HEURE, heures, jours } from '../constants/data';
import { Session } from '../types';
import { FlowEventBlock } from './flow-event-block';

interface WeekCalendarProps {
    todayIndex?: number;
    sessions: Session[];
}

export function WeekCalendar({
    todayIndex = 2,
    sessions,
}: WeekCalendarProps) {
    return (
        <div className="overflow-hidden rounded-xl border border-border/60 bg-card">
            {/* Header */}
            <div className="grid grid-cols-[72px_repeat(7,1fr)] border-b border-border">
                <div className="flex items-center justify-center py-3 font-mono text-xs text-muted-foreground">
                    J/H
                </div>

                {jours.map((jour, index) => (
                    <div
                        key={jour}
                        className={`flex items-center justify-center py-3 text-sm font-medium ${
                            index === todayIndex
                                ? 'bg-muted text-foreground'
                                : 'text-muted-foreground'
                        }`}
                    >
                        {jour}
                    </div>
                ))}
            </div>

            {/* Calendar */}
            <div className="h-screen overflow-y-auto">
                <div className="grid grid-cols-[72px_repeat(7,1fr)]">
                    {/* Colonne des heures */}
                    <div>
                        {heures.map((heure) => (
                            <div
                                key={heure}
                                style={{ height: HAUTEUR_HEURE }}
                                className="border-b border-border/60 pt-1 text-center font-mono text-xs text-muted-foreground"
                            >
                                {String(heure).padStart(2, '0')}:00
                            </div>
                        ))}
                    </div>

                    {/* Colonnes des jours */}
                    {jours.map((jour, dayIndex) => (
                        <div
                            key={jour}
                            className={`relative border-l border-border/60 ${
                                dayIndex === todayIndex ? 'bg-muted/40' : ''
                            }`}
                            style={{
                                height: heures.length * HAUTEUR_HEURE,
                            }}
                        >
                            {/* Grille */}
                            {heures.map((heure) => (
                                <div
                                    key={heure}
                                    style={{ height: HAUTEUR_HEURE }}
                                    className="border-b border-border/60"
                                />
                            ))}

                            {/* Sessions */}
                            {sessions
                                .filter((s) =>
                                    s.jour
                                        .toLowerCase()
                                        .includes(jour.toLowerCase()),
                                )
                                .map((session) => (
                                    <FlowEventBlock
                                        key={session.id}
                                        session={session}
                                        startHour={heures[0]}
                                    />
                                ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}