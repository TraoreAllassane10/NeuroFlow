import type { Auth } from '@/types/auth';
import { Evolution, NeuroScore } from '.';
import { Stimulus } from '@/modules/dopamineTracker/types';
import { Recommendation } from '@/modules/dashboard/types';

declare module 'react' {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface InputHTMLAttributes<T> {
        passwordrules?: string;
    }
}

declare module '@inertiajs/core' {
    export interface InertiaConfig {
        sharedPageProps: {
            name: string;
            auth: Auth;
            neuro_scores: NeuroScore;
            score_global: number;
            graphique: {
                evolution: Evolution[];
                heatmap: number[];
                streak: number;
            }
            recent_stimuli: Stimulus[];
            recommandations: Recommendation[];
            sidebarOpen: boolean;
            [key: string]: unknown;
        };
    }
}
