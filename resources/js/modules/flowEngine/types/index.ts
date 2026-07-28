export type EventVariant = 'mint' | 'sync' | 'session' | 'busy';

export interface FlowEvent {
    day: number; // 0 = Lun ... 6 = Dim
    start: number; // heure décimale
    end: number;
    label?: string;
    variant: EventVariant;
    splitAt?: number; // pour 'session' : heure de transition indigo -> teal
}