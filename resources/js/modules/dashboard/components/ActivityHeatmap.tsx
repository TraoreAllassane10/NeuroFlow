const couleurParNombre = [
    'bg-muted',
    'bg-indigo-100',
    'bg-indigo-200',
    'bg-indigo-400',
    'bg-indigo-600',
    'bg-indigo-700',
    'bg-indigo-800',
    'bg-indigo-900',
];

export function ActivityHeatmap({ data }: { data: number[] }) {
    return (
        <div className="grid grid-cols-7 gap-1.5">
            {data.map((nombre, i) => (
                <div
                    key={i}
                    title={nombre.toString()}
                    className={`size-8 aspect-square rounded-lg ${couleurParNombre[nombre] ?? 'bg-indigo-900'}`}
                />
            ))}
        </div>
    );
}
