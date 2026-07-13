import { LucideIcon } from "lucide-react";

export interface TimelineEvent {
    hour: number;
    type: 'fast' | 'cluster';
    icon: LucideIcon;
    label: string;
}