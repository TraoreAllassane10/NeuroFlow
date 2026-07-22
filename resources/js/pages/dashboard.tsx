import { Head, usePage } from '@inertiajs/react';

import { dashboard } from '@/routes';
import {  protocolActions } from '@/modules/dashboard/constant/data';
import { Card, CardContent } from '@/components/ui/card';
import MetricJauge from '@/modules/dashboard/components/metric-jauge';
import { Button } from '@/components/ui/button';
import {
    ArrowRight,
    CalendarCheck2,
    Flame,
    Sunrise,
    TrendingUp,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ActivityHeatmap } from '@/modules/dashboard/components/ActivityHeatmap';
import { EvolutionChart } from '@/modules/dashboard/components/EvolutionChart';
import { StimulusList } from '@/modules/dashboard/components/StimulusList';

export default function Dashboard() {
    const { auth, neuro_scores } = usePage().props;

    const metrics = [
    { key: 'dopamine', label: 'Dopamine', value: neuro_scores.score_dopamine, color: '#E0A030' },
    { key: 'cortisol', label: 'Cortisol', value: neuro_scores.score_cortisol, color: '#C23B3B' },
    { key: 'serotonin', label: 'Serotonine', value: neuro_scores.score_serotonine, color: '#5FCFB0' },
    { key: 'oxytocin', label: 'Oxytocin', value: neuro_scores.score_oxytocine, color: '#2F6FBA' },
];
    return (
        <>
            <Head title="Dashboard" />

            {/* Titre et Statut */}
            <div>
                <h1 className="mb-4 text-2xl font-bold text-foreground">
                    Bonjour {auth.user.name} - Voici ton état neurochimique
                </h1>

                <div className="mb-4 flex items-center gap-2 text-red-600">
                    <span className="size-1.5 rounded-full bg-red-600" /> Etat :
                    Attention requise
                </div>
            </div>

            {/* 4 jauges neurochimiques */}
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                {metrics.map((m) => (
                    <Card key={m.key} className="border-border/60 bg-white">
                        <CardContent className="flex flex-col items-center gap-3 py-6">
                            <MetricJauge value={m.value} color={m.color} />

                            <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                                {m.label}
                            </span>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* CTA check-in */}
            <Button className="mx-auto my-6 flex items-center justify-center gap-2 bg-primary px-6 hover:bg-primary/90">
                Faire mon check-in
            </Button>

            <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
                <Card className="border-border/60 lg:col-span-2">
                    <CardContent className="py-6">
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-base font-semibold">
                                Évolution 7 jours
                            </h2>
                            <div className="flex gap-1 rounded-md border border-border p-0.5 text-xs">
                                {['7j', '30j', '90j'].map((period, i) => (
                                    <button
                                        key={period}
                                        className={`rounded px-2 py-1 ${
                                            i === 0
                                                ? 'bg-muted font-medium text-foreground'
                                                : 'text-muted-foreground'
                                        }`}
                                    >
                                        {period}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <EvolutionChart />

                        <div className="mt-4 flex items-start gap-3 rounded-lg bg-indigo-50 p-4">
                            <TrendingUp className="mt-0.5 size-4 shrink-0 text-indigo-600" />
                            <div className="text-sm">
                                <p className="text-xs font-semibold tracking-wide text-indigo-700 uppercase">
                                    Tendance détectée
                                </p>
                                <p className="text-foreground">
                                    Ta dopamine baisse chaque lundi.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="flex flex-col gap-4">
                    <Card className="border-border/60">
                        <CardContent className="py-6">
                            <h2 className="mb-4 text-base font-semibold">
                                Heatmap activité
                            </h2>
                            <ActivityHeatmap />
                        </CardContent>
                    </Card>

                    <Card className="border-border/60">
                        <CardContent className="flex items-center justify-between py-2">
                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Streak
                                </p>
                                <p className="text-xl font-bold text-primary">
                                    12 Jours
                                </p>
                            </div>
                            <div className="flex size-10 items-center justify-center rounded-full bg-orange-100">
                                <Flame className="size-5 text-orange-500" />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Fenêtre optimale + actions du protocole */}
            <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                <Card className="border-border/60">
                    <CardContent className="py-6">
                        <div className="mb-3 flex items-center gap-2 text-sm font-medium text-muted-foreground">
                            <Sunrise className="size-4" />
                            Fenêtre optimale
                        </div>
                        <div className="flex items-center gap-2 text-lg font-semibold">
                            10h15{' '}
                            <ArrowRight className="size-4 text-muted-foreground" />{' '}
                            12h30
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">
                            Dans 45 min
                        </p>
                        <Button variant="outline" className="mt-4 w-full gap-2">
                            <CalendarCheck2 className="size-4" />
                            Planifier
                        </Button>
                    </CardContent>
                </Card>

                {protocolActions.map((action) => (
                    <Card key={action.title} className="border-border/60">
                        <CardContent className="flex flex-col gap-4 py-6">
                            <div className="flex items-center justify-between">
                                <action.icon className="size-5 text-primary" />
                                {action.source && (
                                    <Badge
                                        variant="secondary"
                                        className="bg-accent text-[10px] font-semibold text-muted-foreground"
                                    >
                                        {action.source}
                                    </Badge>
                                )}
                            </div>
                            <p className="text-sm font-medium text-foreground">
                                {action.title}
                            </p>
                            <button className="text-left text-sm font-medium text-primary hover:underline">
                                Marquer comme faite
                            </button>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Derniers stimulus */}
            <Card className="border-border/60">
                <CardContent className="py-6">
                    <h2 className="mb-2 text-base font-semibold">
                        Derniers stimulus
                    </h2>
                    <StimulusList />
                </CardContent>
            </Card>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
    ],
};
