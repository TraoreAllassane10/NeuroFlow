import {
    ChevronLeft,
    ChevronRight,
    Clock,
    SproutIcon,
    Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CategoryPicker } from '../components/category-picker';
import { useState } from 'react';
import { DopamineTimeline } from '../components/dopamine-timeline';


type Speed = 'rapide' | 'lente';

export default function Index() {
    const [description, setDescription] = useState('');
    const [speed, setSpeed] = useState<Speed>('rapide');
    const [category, setCategory] = useState('jeu');
    const [intensity, setIntensity] = useState(8);
    const [time, setTime] = useState('14:30');

    function handleSubmit() {
        // À brancher sur router.post(route('dopamine.store'), { description, speed, category, intensity, time })
    }

    return (
        <>
            {/* Formulaire de saisie du déclencheur */}
            <Card className="border-border/60">
                <CardContent className="py-6">
                    <h1 className="mb-4 text-lg font-bold text-foreground">
                        Qu'est-ce qui a déclenché de la dopamine ?
                    </h1>

                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Input
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Décrivez l'activité..."
                            className="h-11 flex-1"
                        />

                        <div className="flex shrink-0 gap-1 rounded-lg border border-border p-1">
                            <button
                                type="button"
                                onClick={() => setSpeed('rapide')}
                                className={`flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                                    speed === 'rapide'
                                        ? 'bg-red-100 text-red-700'
                                        : 'text-muted-foreground hover:bg-muted'
                                }`}
                            >
                                Rapide <Zap size={18} />
                            </button>
                            <button
                                type="button"
                                onClick={() => setSpeed('lente')}
                                className={`flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                                    speed === 'lente'
                                        ? 'bg-emerald-100 text-emerald-700'
                                        : 'text-muted-foreground hover:bg-muted'
                                }`}
                            >
                                Lente <SproutIcon size={18} />
                            </button>
                        </div>
                    </div>

                    <div className="mt-4">
                        <CategoryPicker
                            value={category}
                            onChange={setCategory}
                        />
                    </div>

                    <div className="mt-6 flex flex-col gap-4 border-t border-border pt-5 sm:flex-row sm:items-center">
                        <span className="text-sm text-muted-foreground">
                            Intensité (1-10)
                        </span>
                        <div className="flex flex-1 items-center gap-3">
                            <Slider
                                value={[intensity]}
                                onValueChange={([v]) => setIntensity(v)}
                                min={1}
                                max={10}
                                step={1}
                                className="flex-1"
                            />
                            <span className="w-4 text-sm font-medium text-primary">
                                {intensity}
                            </span>
                        </div>

                        <div className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm text-muted-foreground">
                            <Clock className="size-4" />
                            <input
                                type="time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                className="bg-transparent outline-none"
                            />
                        </div>

                        <Button
                            onClick={handleSubmit}
                            className="bg-primary hover:bg-indigo-800"
                        >
                            Ajouter
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/*  Timeline / Analytique */}
            <Tabs defaultValue="timeline">
                <TabsList className="h-auto justify-start gap-6 rounded-none border-b border-border bg-transparent p-0">
                    <TabsTrigger
                        value="timeline"
                        className="rounded-none border-b-2 border-transparent px-0 pb-2 font-medium text-muted-foreground data-[state=active]:text-primary"
                    >
                        Timeline
                    </TabsTrigger>
                    <TabsTrigger
                        value="analytique"
                        className="rounded-none border-b-2 border-transparent px-0 pb-2 font-medium text-muted-foreground data-[state=active]:text-primary"
                    >
                        Analytique
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="timeline" className="mt-4">
                    <Card className="border-border/60">
                        <CardContent className="py-6">
                            <div className="mb-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <button
                                        type="button"
                                        className="text-muted-foreground hover:text-foreground"
                                    >
                                        <span className="sr-only">
                                            Jour précédent
                                        </span>
                                        <ChevronLeft className="size-4" />
                                    </button>
                                    <h2 className="text-base font-semibold">
                                        Aujourd'hui, 24 Octobre
                                    </h2>
                                    <button
                                        type="button"
                                        className="text-muted-foreground hover:text-foreground"
                                    >
                                        <span className="sr-only">
                                            Jour suivant
                                        </span>
                                        <ChevronRight className="size-4" />
                                    </button>
                                </div>

                                <div className="flex items-center gap-4 text-sm">
                                    <span className="flex items-center gap-1.5 text-muted-foreground">
                                        <span className="size-2 rounded-full border-2 border-red-400" />
                                        Rapide
                                    </span>
                                    <span className="flex items-center gap-1.5 text-muted-foreground">
                                        <span className="size-2 rounded-full bg-emerald-700" />
                                        Lente
                                    </span>
                                </div>
                            </div>

                            <DopamineTimeline />
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="analytique" className="mt-4">
                    <Card className="border-border/60">
                        <CardContent className="py-10 text-center text-sm text-muted-foreground">
                            Vue analytique à venir.
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </>
    );
}
