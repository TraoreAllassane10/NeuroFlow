import { Droplet, Moon, Sun } from "lucide-react";

export const metrics = [
    { key: 'dopamine', label: 'Dopamine', value: 42, color: '#E0A030' },
    { key: 'cortisol', label: 'Cortisol', value: 71, color: '#C23B3B' },
    { key: 'serotonin', label: 'Serotonin', value: 65, color: '#5FCFB0' },
    { key: 'oxytocin', label: 'Oxytocin', value: 58, color: '#2F6FB' },
];

export const protocolActions = [
    {
        title: 'NSDR 10 min',
        source: 'Huberman Lab',
        icon: Moon,
    },
    {
        title: 'Exposition solaire matinale',
        source: 'Huberman Lab',
        icon: Sun,
    },
    {
        title: 'Hydratation (Sel)',
        source: null,
        icon: Droplet,
    },
];
