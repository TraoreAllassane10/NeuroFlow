
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';

const durations = [25, 50, 90];

const chargeTypes = [
    { value: 'creatif-analytique-haut', label: 'Créatif / Analytique (Haut)' },
    { value: 'administratif-leger', label: 'Administratif / Léger' },
    { value: 'collaboratif', label: 'Collaboratif / Réunions' },
];

export function PlanSessionForm() {
    const [objective, setObjective] = useState('');
    const [duration, setDuration] = useState(50);
    const [chargeType, setChargeType] = useState(chargeTypes[0].value);

    function handleSubmit() {
        // À brancher sur router.post(route('flow.plan'), { objective, duration, chargeType })
    }

    return (
        <Card className="border-border/60">
            <CardContent className="flex flex-col gap-5 py-6">
                <h2 className="text-lg font-bold text-foreground">Planifier</h2>

                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                        Objectif / Tâche
                    </label>
                    <Input
                        value={objective}
                        onChange={(e) => setObjective(e.target.value)}
                        placeholder="Ex: Rédaction specs..."
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                        Durée (min)
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                        {durations.map((d) => (
                            <button
                                key={d}
                                type="button"
                                onClick={() => setDuration(d)}
                                className={`rounded-md border py-2 text-sm font-medium transition-colors ${
                                    duration === d
                                        ? 'border-indigo-600 text-indigo-700'
                                        : 'border-border text-foreground hover:bg-muted'
                                }`}
                            >
                                {d}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                        Type de charge
                    </label>
                    <Select value={chargeType} onValueChange={setChargeType}>
                        <SelectTrigger className="w-full">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {chargeTypes.map((c) => (
                                <SelectItem key={c.value} value={c.value}>
                                    {c.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <Button
                    type="button"
                    variant="outline"
                    onClick={handleSubmit}
                    className="border-indigo-600 text-indigo-700 hover:bg-indigo-50 hover:text-indigo-700"
                >
                    Ajouter au planning
                </Button>
            </CardContent>
        </Card>
    );
}