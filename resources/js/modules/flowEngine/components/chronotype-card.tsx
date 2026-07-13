import { Card, CardContent } from '@/components/ui/card';

interface ChronotypeCardProps {
    type: string;
    description: string;
    emoji?: string;
}

export function ChronotypeCard({ type, description, emoji = '🦁' }: ChronotypeCardProps) {
    return (
        <Card className="border-border/60">
            <CardContent className="py-6">
                <p className="mb-3 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    Ton Chronotype
                </p>
                <div className="flex items-center gap-3">
                    <span className="flex size-11 items-center justify-center rounded-full bg-amber-100 text-2xl">
                        {emoji}
                    </span>
                    <div>
                        <p className="text-lg font-bold text-foreground">{type}</p>
                        <p className="text-sm text-muted-foreground">{description}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}