import OnboardingLayout from '@/layouts/onboarding-layout';
import { Card, CardContent } from '../ui/card';
import { Slider } from '../ui/slider';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { LayoutDashboard } from 'lucide-react';

function SliderField({ label, value, onChange }: any) {
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

export default function PremierCheckin({mood, setMood, sleepQuality, setSleepQuality, energyLevel, setEnergyLevel, notes, setNotes, precedent, onSubmit }: any) {

    return (
        <OnboardingLayout>
            <h1 className="mb-8 text-xl font-semibold text-muted-foreground">
                Premier Check-in
            </h1>

            <Card className="mb-6">
                <CardContent>
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
                </CardContent>
            </Card>

            <div className="flex items-center justify-between">
                <Button onClick={precedent}>Précédent</Button>
                <Button onClick={onSubmit}>
                    <LayoutDashboard /> Accéder mon tableau de bord
                </Button>
            </div>
        </OnboardingLayout>
    );
}
