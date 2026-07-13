import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface OptimalWindowCardProps {
    start: string;
    end: string;
    durationLabel: string;
    onStart?: () => void;
}

export function OptimalWindowCard({ start, end, durationLabel, onStart }: OptimalWindowCardProps) {
    return (
        <Card className="overflow-hidden border-border/60 border-t-4 border-t-emerald-600 py-0">
            <CardContent className="py-6">
                <p className="mb-3 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    Prochaine Fenêtre Optimale
                </p>
                <p className="font-mono text-2xl font-bold text-foreground">
                    {start} <span className="text-muted-foreground">-</span> {end}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">Durée: {durationLabel}</p>
                <Button onClick={onStart} className="mt-4 w-full gap-2 bg-primary hover:bg-indigo-800">
                    <Play className="size-4 fill-current" />
                    Démarrer Session
                </Button>
            </CardContent>
        </Card>
    );
}