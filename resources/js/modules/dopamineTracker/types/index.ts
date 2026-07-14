import { LucideIcon } from "lucide-react";

export interface Category {
    key: string;
    label: string;
    icon: LucideIcon;
}

export interface TimelineEvent {
    hour: number;
    type: 'fast' | 'cluster';
    icon: LucideIcon;
    label: string;
}