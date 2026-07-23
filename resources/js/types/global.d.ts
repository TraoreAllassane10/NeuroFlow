import type { Auth } from '@/types/auth';
import { Evolution, NeuroScore } from '.';

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
            }
            sidebarOpen: boolean;
            [key: string]: unknown;
        };
    }
}
