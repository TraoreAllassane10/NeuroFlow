// Intensité 0 à 4 par cellule. À remplacer par l'agrégat réel des stimulus
// par créneau (ex: nombre d'événements loggés par heure/jour).
const intensities = [
    0, 1, 2, 1, 0, 2, 4, 1, 0, 2, 1, 3, 1, 2, 1, 0, 1, 2, 0, 3, 4,
];

const levelClasses = [
    'bg-muted',
    'bg-indigo-100',
    'bg-indigo-200',
    'bg-indigo-400',
    'bg-indigo-600',
];

export function ActivityHeatmap() {
    return (
        <div className="grid grid-cols-7 gap-1.5">
            {intensities.map((level, i) => (
                <div
                    key={i}
                    className={`aspect-square rounded-lg ${levelClasses[level]}`}
                />
            ))}
        </div>
    );
}