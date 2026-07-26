import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { useEffect, useState } from 'react';
import { Loader2Icon, LucideIcon, MoreHorizontal } from 'lucide-react';
import useDashboard from '../hooks/useDashboard';
import { Recommendation } from '../types';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

interface ShowStimulisProps {
    open: boolean;
    onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
    recommandationId: number;
}

const DialogRecommendation = ({
    open,
    onOpenChange,
    recommandationId,
}: ShowStimulisProps) => {
    const [recommendation, setRecommandation] = useState<Recommendation | null>(
        null,
    );
    const { getRecommendation, marquerRecommendationCommeFaite, loading } =
        useDashboard();

    async function loadRecommendationData() {
        const resultat = await getRecommendation(recommandationId);
        setRecommandation(resultat);
    }

    useEffect(() => {
        loadRecommendationData();
    }, [recommandationId]);

    const accomplir = async (id: number) => {
        const response = await marquerRecommendationCommeFaite(id);

        if (response.success) {
            toast.success(response.message);
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
                                {recommendation?.titre}
                            </DialogTitle>
                        </DialogHeader>

                        <div className="text-sm text-muted-foreground">
                            <Badge
                                variant="secondary"
                                className="bg-accent text-[10px] font-semibold text-muted-foreground"
                            >
                                <span className="truncate">
                                    {recommendation?.source}
                                </span>
                            </Badge>

                            <p className="mt-4 leading-7">
                                {recommendation?.description}
                            </p>
                        </div>

                        <DialogFooter className="pt-4">
                            {!recommendation?.accompli ? (
                                <Button
                                    size={'sm'}
                                    onClick={() =>
                                        accomplir(recommendation?.id!)
                                    }
                                    disabled={loading}
                                    className="bg-primary transition hover:bg-indigo-800"
                                >
                                    {loading ? (
                                        <Loader2Icon className="animate-spin" />
                                    ) : (
                                        'Marquer comme faire'
                                    )}
                                </Button>
                            ) : (
                                <p className="text-green-700">
                                    Tâche accomplie
                                </p>
                            )}
                        </DialogFooter>
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default DialogRecommendation;
