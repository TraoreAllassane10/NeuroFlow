import type { Auth } from '@/types/auth';
import { NeuroScore } from '.';

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
            sidebarOpen: boolean;
            [key: string]: unknown;
        };
    }
}
