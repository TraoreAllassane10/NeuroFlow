import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

// Je vais remplacer ces points par les vraies données du check-in (props Inertia)
// une fois l'endpoint /evolution branché.
const data = [
    { day: 'L', dopamine: 38, oxytocin: 30 },
    { day: 'M', dopamine: 45, oxytocin: 38 },
    { day: 'M', dopamine: 41, oxytocin: 34 },
    { day: 'J', dopamine: 58, oxytocin: 50 },
    { day: 'V', dopamine: 52, oxytocin: 46 },
    { day: 'S', dopamine: 66, oxytocin: 60 },
    { day: 'D', dopamine: 60, oxytocin: 54 },
];

export function EvolutionChart() {
    return (
        <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 8, right: 8, left: 8, bottom: 0 }}>
                    <XAxis
                        dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                    />
                    <Tooltip
                        cursor={{ stroke: 'hsl(var(--border))', strokeWidth: 1 }}
                        contentStyle={{
                            borderRadius: 8,
                            border: '1px solid hsl(var(--border))',
                            fontSize: 12,
                        }}
                    />
                    <Line
                        type="monotone"
                        dataKey="dopamine"
                        stroke="#7C6FE0"
                        strokeWidth={2.5}
                        dot={false}
                        name="Dopamine"
                    />
                    <Line
                        type="monotone"
                        dataKey="oxytocin"
                        stroke="#2F8F6E"
                        strokeWidth={2.5}
                        dot={false}
                        name="Oxytocine"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}