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
import useFlowSession from '../hooks/useFlowSession';
import { router } from '@inertiajs/react';
import { toast } from 'sonner';
import axios from 'axios';

const typesSession = [
    { value: 'créativité', label: 'créativité' },
    { value: 'concentration profonde', label: 'concentration profonde' },
    { value: 'lecture', label: 'lecture' },
    { value: 'code', label: 'code' },
    { value: 'autres', label: 'autres' },
];

export function PlanSessionForm() {
    const [nom_tache, setNomTache] = useState('');
    const [date, setDate] = useState<string>('');
    const [heure_debut, setHeureDebut] = useState<string>('');
    const [heure_fin, setHeureFin] = useState<string>('');
    const [type_session, setTypeSession] = useState(typesSession[0].value);

    const { createSession, loading } = useFlowSession();

    async function handleSubmit() {
        try {
            const response = await createSession({
                nom_tache,
                date,
                heure_debut,
                heure_fin,
                type_session,
            });

            toast.success(response.message);
            router.reload();

            setNomTache('');
            setDate('');
            setHeureDebut('');
            setHeureFin('');
            setTypeSession('');
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data.message);
            } else {
                toast.error('Une erreur est survenue.');
            }
        }
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
                        value={nom_tache}
                        onChange={(e) => setNomTache(e.target.value)}
                        placeholder="Ex: Rédaction specs..."
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                        Date
                    </label>
                    <Input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        placeholder="Ex: Rédaction specs..."
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                        Heure de début
                    </label>
                    <Input
                        type="time"
                        value={heure_debut}
                        onChange={(e) => setHeureDebut(e.target.value)}
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                        Heure de fin
                    </label>
                    <Input
                        type="time"
                        value={heure_fin}
                        onChange={(e) => setHeureFin(e.target.value)}
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                        Type de charge
                    </label>
                    <Select value={type_session} onValueChange={setTypeSession}>
                        <SelectTrigger className="w-full">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {typesSession.map((c) => (
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
                    disabled={loading}
                    className="border-primary text-primary hover:bg-indigo-50 hover:text-indigo-700"
                >
                    {loading ? 'Plannification...' : 'Ajouter au planning'}
                </Button>
            </CardContent>
        </Card>
    );
}
