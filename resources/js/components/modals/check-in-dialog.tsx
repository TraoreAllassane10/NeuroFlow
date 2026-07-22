import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Slider } from '@/components/ui/slider';
import { Textarea } from '@/components/ui/textarea';
import useDailyCheckin from '@/hooks/useDailyCheckin';
import { CreateDailyData } from '@/types';
import { toast } from 'sonner';
import { router } from '@inertiajs/react';

export interface CheckInPayload {
    mood: number;
    sleepQuality: number;
    energyLevel: number;
    notes: string;
}

interface CheckInDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    date?: string;
}

interface SliderFieldProps {
    label: string;
    value: number;
    onChange: (value: number) => void;
}

function SliderField({ label, value, onChange }: SliderFieldProps) {
    return (
        <div>
            <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-foreground">{label}</span>
                <span className="font-mono font-medium text-primary">
                    {value}/10
                </span>
            </div>
            <Slider
                value={[value]}
                onValueChange={([v]) => onChange(v)}
                min={0}
                max={10}
                step={1}
            />
        </div>
    );
}

export function CheckInDialog({
    open,
    onOpenChange,
    date = "Aujourd'hui",
}: CheckInDialogProps) {
    const [mood, setMood] = useState(7);
    const [sleepQuality, setSleepQuality] = useState(5);
    const [energyLevel, setEnergyLevel] = useState(8);
    const [notes, setNotes] = useState('');

    const { createDailyCheckin } = useDailyCheckin();

    async function handleSubmit() {
        // Preparation de l'objet à envoyer au backend
        const newDailyCheckin: CreateDailyData = {
            humeur: mood,
            qualite_sommeil: sleepQuality,
            niveau_energie: energyLevel,
            note: notes,
        };

        const response = await createDailyCheckin(newDailyCheckin);

        if (response && response.success) {
            toast.success(
                response.message || 'Checkin du jour éffectué avec succès',
            );
            router.reload();
        }

        onOpenChange(false);
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-primary">
                        Check-in du jour
                    </DialogTitle>
                    <p className="text-sm text-muted-foreground">{date}</p>
                </DialogHeader>

                <div className="flex flex-col gap-5 py-2">
                    <SliderField
                        label="Humeur générale"
                        value={mood}
                        onChange={setMood}
                    />
                    <SliderField
                        label="Qualité du sommeil"
                        value={sleepQuality}
                        onChange={setSleepQuality}
                    />
                    <SliderField
                        label="Niveau d'énergie"
                        value={energyLevel}
                        onChange={setEnergyLevel}
                    />

                    <div>
                        <label className="mb-2 block text-sm text-foreground">
                            Notes rapides
                        </label>
                        <Textarea
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder="Comment vous sentez-vous aujourd'hui ?"
                            className="min-h-28 resize-none bg-muted/30"
                        />
                    </div>
                </div>

                <DialogFooter className="border-t border-border pt-4">
                    <Button
                        onClick={handleSubmit}
                        className="bg-indigo-700 hover:bg-indigo-800"
                    >
                        Enregistrer le check-in
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
