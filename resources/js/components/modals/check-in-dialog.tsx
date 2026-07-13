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

const needsOptions = [
    'Concentration',
    'Calme',
    'Motivation',
    'Récupération',
] as const;

export interface CheckInPayload {
    mood: number;
    sleepQuality: number;
    energyLevel: number;
    notes: string;
    needs: string[];
}

interface CheckInDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    date?: string;
    onSubmit?: (payload: CheckInPayload) => void;
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
    onSubmit,
}: CheckInDialogProps) {
    const [mood, setMood] = useState(7);
    const [sleepQuality, setSleepQuality] = useState(5);
    const [energyLevel, setEnergyLevel] = useState(8);
    const [notes, setNotes] = useState('');
    const [needs, setNeeds] = useState<string[]>([
        'Concentration',
        'Motivation',
    ]);

    function toggleNeed(need: string) {
        setNeeds((prev) =>
            prev.includes(need)
                ? prev.filter((n) => n !== need)
                : [...prev, need],
        );
    }

    function handleSubmit() {
        onSubmit?.({ mood, sleepQuality, energyLevel, notes, needs });
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

                    <div>
                        <p className="mb-2 text-sm text-foreground">
                            Besoins immédiats
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {needsOptions.map((need) => {
                                const active = needs.includes(need);
                                return (
                                    <button
                                        key={need}
                                        type="button"
                                        onClick={() => toggleNeed(need)}
                                        aria-pressed={active}
                                        className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                                            active
                                                ? 'border-indigo-300 bg-indigo-50 text-primary'
                                                : 'border-border text-foreground hover:bg-muted'
                                        }`}
                                    >
                                        {need}
                                    </button>
                                );
                            })}
                        </div>
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
