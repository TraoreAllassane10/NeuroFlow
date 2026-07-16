import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { useEffect, useState } from 'react';
import useStimulus from '../hooks/useStimulus';
import { Stimulus } from '../types';
import { Loader2Icon, LucideIcon, MoreHorizontal } from 'lucide-react';
import { categories } from '../constants/data';
import { toast } from 'sonner';
import { router } from '@inertiajs/react';

interface ShowStimulisProps {
    open: boolean;
    onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
    stimuliId: number;
}

const ShowStimulis = ({ open, onOpenChange, stimuliId }: ShowStimulisProps) => {
    const [stimuli, setStimuli] = useState<Stimulus | null>(null);
    const { getStimulusParId, deleteStimulus, loading } = useStimulus();
    let Icon: LucideIcon = MoreHorizontal;

    if (stimuli) {
        // Recuperer la categorie correspondante dans constants/data.ts
        const stimuliTrouve = categories.find(
            (c) => c.key === stimuli.categorie,
        );

        // Mettre l'icon correspondant
        if (stimuliTrouve) Icon = stimuliTrouve?.icon;
    }

    async function loadStimulus() {
        const resultat = await getStimulusParId(stimuliId);
        setStimuli(resultat);
    }

    useEffect(() => {
        if (open) {
            setStimuli(null);
            loadStimulus();
        }
    }, [open, stimuliId]);

    const handleDelete = async () => {
        if (stimuli?.id) {
            const response = await deleteStimulus(stimuli.id);

            if (response.success) {
                toast.success(response.message);
                onOpenChange(false);

                // Je recharge la page parce que le composant de la page ne sait pas ce qui se passe dans le composant timeline
                // Autrement dire , il ne connait pas les etats .
                // Or, c'est lui qui recupere les données.
                // Comme il ne connait l'etat du timeline, il ne pourra pas savoir qu'une suppression a été faite afin de recharger les données
                router.visit('/dopamine-tracker');
            }
        } else {
            toast.error('Echec lors de la suppression ! Veuillez ressayer.');
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-lg">
                {loading ? (
                    <div className="flex items-center justify-center">
                        <Loader2Icon className="animate-spin" />
                    </div>
                ) : (
                    <>
                        <DialogHeader>
                            <DialogTitle className="text-md flex items-center justify-between font-bold">
                                <div className="flex items-center gap-2">
                                    <div
                                        className={`flex size-9 items-center justify-center ${stimuli?.type === 'lente' ? 'rounded-lg bg-emerald-700 text-white' : 'rounded-full border-2 border-red-300 text-red-500'}`}
                                    >
                                        <Icon className="size-4" />
                                    </div>
                                    <h2 className="text-lg leading-1 tracking-wide text-muted-foreground">
                                        {stimuli?.label}
                                    </h2>
                                </div>
                            </DialogTitle>
                        </DialogHeader>

                        <div className="text-sm text-muted-foreground">
                            {stimuli?.created_at} à {stimuli?.logged_at}
                        </div>

                        <DialogFooter className="pt-4">
                            <Button
                                size={'sm'}
                                onClick={handleDelete}
                                className="bg-red-700 transition hover:bg-red-800"
                            >
                                {loading ? (
                                    <Loader2Icon className="animate-spin" />
                                ) : (
                                    'Supprimer'
                                )}
                            </Button>
                        </DialogFooter>
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default ShowStimulis;
