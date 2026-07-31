import { HAUTEUR_HEURE } from '../constants/data';
import { FlowEvent, Session } from '../types';

function formatHour(h: number) {
    const hh = Math.floor(h);
    const mm = Math.round((h - hh) * 60);
    return `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`;
}

function toMinutes(time: string) {
    const [h, m] = time.split(':').map(Number);

    return h * 60 + m;
}

export function FlowEventBlock({
    session,
    startHour,
}: {
    session: Session;
    startHour: number;
}) {
    let debut = toMinutes(session.heure_debut);
    let fin = toMinutes(session.heure_fin);

    if (fin <= debut) {
        fin = 24 * 60;
    }

    const top = ((debut - startHour * 60) / 60) * HAUTEUR_HEURE;
    const height = ((fin - debut) / 60) * HAUTEUR_HEURE;

    const heureDebut = session.heure_debut.split(':').map(String);
    const heureFin = session.heure_fin.split(':').map(String);

    return (
        <div
            className="absolute right-1 left-1 rounded-lg bg-green-500 p-2 text-xs text-white shadow"
            style={{
                top,
                height,
            }}
        >
            <div className="font-semibold">{session.nom_tache}</div>

            <div className="mt-1 opacity-80">
                {heureDebut[0] + ':' + heureDebut[1]} -{' '}
                {heureFin[0] + ':' + heureFin[1]}
            </div>
        </div>
    );
}
