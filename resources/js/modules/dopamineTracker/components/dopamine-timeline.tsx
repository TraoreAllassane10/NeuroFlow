import { events, hourMarks } from '../constants/data';

export function DopamineTimeline() {
    return (
        <div>
            <div className="relative h-40 w-full overflow-hidden rounded-lg bg-linear-to-b from-primary/25 to-white">
                {events.map((event) => {
                    const left = `${(event.hour / 24) * 100}%`;

                    if (event.type === 'cluster') {
                        return (
                            <div
                                key={event.label}
                                title={event.label}
                                className="absolute top-10 flex size-9 -translate-x-1/2 items-center justify-center rounded-lg bg-emerald-700 text-white shadow-sm"
                                style={{ left }}
                            >
                                <event.icon className="size-4" />
                            </div>
                        );
                    }

                    return (
                        <div
                            key={event.label}
                            title={event.label}
                            className="absolute top-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-red-300 bg-red-50 text-red-500"
                            style={{ left }}
                        >
                            <event.icon className="size-4" />
                        </div>
                    );
                })}
            </div>
            <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                {hourMarks.map((h) => (
                    <span key={h}>{h}h</span>
                ))}
            </div>
        </div>
    );
}