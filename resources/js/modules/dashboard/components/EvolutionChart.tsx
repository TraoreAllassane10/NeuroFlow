import { Evolution } from '@/types';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

export function EvolutionChart({ data }: { data: Evolution[] }) {
    return (
        <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data}
                    margin={{ top: 8, right: 8, left: 8, bottom: 0 }}
                >
                    <XAxis
                        dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        tick={{
                            fontSize: 12,
                            fill: 'hsl(var(--muted-foreground))',
                        }}
                    />
                    <Tooltip
                        cursor={{
                            stroke: 'hsl(var(--border))',
                            strokeWidth: 1,
                        }}
                        contentStyle={{
                            borderRadius: 8,
                            border: '1px solid hsl(var(--border))',
                            fontSize: 12,
                        }}
                    />
                    <Line
                        type="monotone"
                        dataKey="dopamine"
                        stroke="#E0A030"
                        strokeWidth={2.5}
                        dot={false}
                        name="Dopamine"
                    />
                    <Line
                        type="monotone"
                        dataKey="cortisol"
                        stroke="#C23B3B"
                        strokeWidth={2.5}
                        dot={false}
                        name="Cortisol"
                    />
                    <Line
                        type="monotone"
                        dataKey="serotonine"
                        stroke="#5FCFB0"
                        strokeWidth={2.5}
                        dot={false}
                        name="Serotonine"
                    />
                    <Line
                        type="monotone"
                        dataKey="oxytocine"
                        stroke="#2F6FBA"
                        strokeWidth={2.5}
                        dot={false}
                        name="Oxytocine"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
