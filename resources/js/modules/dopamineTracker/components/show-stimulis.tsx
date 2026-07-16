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

interface ShowStimulisProps {
    open: boolean;
    onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
    stimuliId: number;
}

const ShowStimulis = ({ open, onOpenChange, stimuliId }: ShowStimulisProps) => {
    const [stimuli, setStimuli] = useState<Stimulus | null>(null);
    const { getStimulusParId, loading } = useStimulus();
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
        setStimuli(null);
        loadStimulus();
    }, []);

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

                        <div className='text-muted-foreground text-sm'>
                            {stimuli?.created_at} à {stimuli?.logged_at}
                        </div>

                        <DialogFooter className="pt-4">
                            <Button
                                size={'sm'}
                                className="bg-red-700 transition hover:bg-red-800"
                            >
                                Supprimer
                            </Button>
                        </DialogFooter>
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default ShowStimulis;
