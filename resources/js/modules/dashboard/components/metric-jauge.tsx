import React from 'react';
import { MetricGaugeProps } from '../types';

const MetricJauge = ({
    value,
    color,
    trackColor = '#E7E4DC',
    size = 88,
    strokeWidth = 8,
}: MetricGaugeProps) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset =
        circumference -
        (Math.min(Math.max(value, 0), 100) / 100) * circumference;
    const center = size / 2;

    return (
       <div className="relative" style={{ width: size, height: size }}>
            <svg width={size} height={size} className="-rotate-90">
                <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    fill="none"
                    stroke={trackColor}
                    strokeWidth={strokeWidth}
                />
                <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    fill="none"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    style={{ transition: 'stroke-dashoffset 0.6s ease' }}
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-foreground">
                {value}
            </div>
        </div>
    );
};

export default MetricJauge;
