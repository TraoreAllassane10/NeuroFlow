import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { CircleCheck } from 'lucide-react';

interface ModalReportExportProps {
    open: boolean;
    onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
    onGenerate: () => void;
}

const ModalReportExport = ({ open, onOpenChange, onGenerate }: ModalReportExportProps) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle className="text-md flex items-center justify-between font-bold">
                        Génerer un rapport
                    </DialogTitle>
                </DialogHeader>

                <div className="mt-4 flex flex-col gap-4 text-sm">
                    <div className="flex items-center gap-2">
                        <CircleCheck className="text-primary" />
                        <p className="text-muted-foreground">
                            Période : <span>30 derniers jours</span>
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <CircleCheck className="text-primary" />
                        <p className="text-muted-foreground">
                            Fichier : <span>rapport dopaminergique</span>
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <CircleCheck className="text-primary" />
                        <p className="text-muted-foreground">
                            Format : <span>pdf</span>
                        </p>
                    </div>
                </div>

                <DialogFooter className="pt-4">
                    <Button onClick={() => onOpenChange(false)} size={'sm'} variant={'outline'}>
                        Annuler
                    </Button>
                    <Button
                        size={'sm'}
                        onClick={onGenerate}
                        className="bg-red-700 transition hover:bg-red-800"
                    >
                        Generer
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default ModalReportExport;
