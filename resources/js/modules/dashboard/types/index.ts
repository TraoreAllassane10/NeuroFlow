export interface MetricGaugeProps {
    value: number; 
    color: string;
    trackColor?: string;
    size?: number;
    strokeWidth?: number;
}

export interface Recommendation {
    id: number;
    titre: string;
    description: string;
    source: string;
    accompli: number;
}
