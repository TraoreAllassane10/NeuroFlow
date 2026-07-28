import { HAUTEUR_HEURE } from "../constants/data";
import { FlowEvent } from "../types";

function formatHour(h: number) {
    const hh = Math.floor(h);
    const mm = Math.round((h - hh) * 60);
    return `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`;
}

export function FlowEventBlock({ event, startHour }: { event: FlowEvent; startHour: number }) {
    const top = (event.start - startHour) * HAUTEUR_HEURE;
    const height = (event.end - event.start) * HAUTEUR_HEURE;

    if (event.variant === 'session') {
        const splitHeight = ((event.splitAt ?? event.end) - event.start) * HAUTEUR_HEURE;
        return (
            <div
                className="absolute inset-x-1 flex flex-col overflow-hidden rounded-md shadow-sm"
                style={{ top, height }}
            >
                <div
                    className="flex items-center justify-center bg-primary px-1 text-center text-[11px] leading-tight font-medium text-white"
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
