import { LucideIcon } from 'lucide-react';
import { categories, hourMarks } from '../constants/data';
import { Stimulus } from '../types';
import { useState } from 'react';
import ShowStimulis from './show-stimulis';
import { toast } from 'sonner';

export function DopamineTimeline({ stimulus }: { stimulus: Stimulus[] }) {
    const [stimuliId, setStimuliId] = useState<number | null>(null);
    const [openShowDialog, setOpenShowDialog] = useState<boolean>(false);

    const handleShowDialog = (id: number) => {
        setStimuliId(id);

        // if (!stimuliId) {
        //     toast.error("Ce stimuli n'existe plus ! ");
        //     return;
        // }

        setOpenShowDialog(true);
    };

    return (
        <div>
            {/* Modal d'affichage de detail */}
            {openShowDialog && (
                <ShowStimulis
                    open={openShowDialog}
                    onOpenChange={setOpenShowDialog}
                    stimuliId={stimuliId!}
                />
            )}

            <div className="relative h-40 w-full overflow-hidden rounded-lg bg-linear-to-b from-primary/25 to-white">
                {stimulus.map((stimulu) => {
                    // Decoupe l'heure complete en l'heure et miniute puis les convertir en nombre
                    const [heure, minute] = stimulu.logged_at
                        .split(':')
                        .map(Number);

                    // Mettre l'heure sous forme decimal
                    const heureDecimal = heure + minute / 60;

                    // Position du stimulus par rapport au coté gauche (axe d'une journe)
                    const left = `${(heureDecimal / 24) * 100}%`;

                    const categorie = categories.find(
                        (c) => c.key === stimulu.categorie,
                    );
                    const Icon = categorie?.icon as LucideIcon;

                    // Dopamine lente
                    if (stimulu.type === 'lente') {
                        return (
                            <div
                                key={stimulu.label}
                                title={stimulu.label}
                                onClick={() => handleShowDialog(stimulu.id)}
                                className="absolute top-10 flex size-9 -translate-x-1/2 items-center justify-center rounded-lg bg-emerald-700 text-white shadow-sm"
                                style={{ left }}
                            >
                                <Icon className="size-4" />
                            </div>
                        );
                    }

                    // Dopamine rapide
                    return (
                        <div
                            key={stimulu.label}
                            title={stimulu.label}
                            onClick={() => handleShowDialog(stimulu.id)}
                            className="absolute top-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-red-300 bg-red-50 text-red-500"
                            style={{ left }}
                        >
                            <Icon className="size-4" />
                        </div>
                    );
                })}
            </div>
            <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                {hourMarks.map((h) => (
                    <span key={h}>{h}h</span>
                ))}
            </div>
        </div>
    );
}
