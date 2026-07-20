export type * from './auth';
export type * from './navigation';
export type * from './ui';

export interface Question {
    question: string;
    reponses: { key: string; label: string }[];
}