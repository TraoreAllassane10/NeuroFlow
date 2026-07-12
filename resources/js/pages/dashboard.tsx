import { Head } from '@inertiajs/react';

import { dashboard } from '@/routes';
import ScoreGlobalSection from '@/modules/dashboard/components/ScoreGlobalSection';
import GraphicSection from '@/modules/dashboard/components/GraphicSection';
import RecommandationSection from '@/modules/dashboard/components/RecommandationSection';
import DernierStimulus from '@/modules/dashboard/components/DernierStimulus';

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />

            <h1 className='font-bold text-2xl mb-4'>Bonjour Allassane - Voici ton état neurochimique</h1>

            <div className='flex items-center gap-2 mb-4'>
                <span className='size-2 bg-destructive rounded-full' /> <p className='text-destructive text-sm'>Etat : Attention requise</p>
            </div>

            {/* Les Scores des 4 neurotrasmetteurs */}
            <ScoreGlobalSection />

            {/* Affichage des graphiques */}
            <GraphicSection />

            {/* Recommandation */}
            <RecommandationSection />

            {/* Les derniers stimulus */}
            <DernierStimulus />
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
