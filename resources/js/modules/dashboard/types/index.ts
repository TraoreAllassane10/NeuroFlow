export interface MetricGaugeProps {
    value: number; 
    color: string;
    trackColor?: string;
    size?: number;
    strokeWidth?: number;
}

export type StimulusCategory = 'FOCUS' | 'STRESS' | 'RÉCUP' | 'SPORT' | 'ROUTINE';

export interface Stimulus {
    time: string;
    category: StimulusCategory;
    title: string;
    intensity: number;
}