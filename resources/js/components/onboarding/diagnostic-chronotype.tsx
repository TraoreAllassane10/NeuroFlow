import OnboardingLayout from '@/layouts/onboarding-layout';
import { Question } from '@/types';
import { Button } from '../ui/button';

const question1: Question = {
    question:
        'Si tu avais un week-end totalement libre, à quelle heure te reveilleras-tu naturellement ?',
    reponses: [
        {
            key: 'A',
            label: 'A : Très tôt (avant 6h30), avec une énergie immédiate.',
        },
        {
            key: 'B',
            label: 'B : Autour de 7h30 - 8h, tranquillement.',
        },
        {
            key: 'C',
            label: 'C : Tard (9h ou après), le réveil matin est mon ennemi.',
        },
        {
            key: 'D',
            label: 'D : C’est variable, mon sommeil est souvent léger et irrégulier.',
        },
    ],
};

const question2: Question = {
    question:
        'À quel moment de la journée te sens-tu le plus efficace pour accomplir une tâche difficile ?',
    reponses: [
        {
            key: 'A',
            label: 'A : En début de matinée, juste après le lever.',
        },
        {
            key: 'B',
            label: "B : En milieu de matinée (10h-12h) puis en début d'après-midi.",
        },
        {
            key: 'C',
            label: 'C : En fin de journée ou durant la nuit.',
        },
        {
            key: 'D',
            label: 'D : Par vagues successives, mais rarement à heure fixe.',
        },
    ],
};

const question3: Question = {
    question: 'Comment te sens-tu généralement aux alentours de 14h - 15h ?',
    reponses: [
        {
            key: 'A',
            label: "A : C'est le début de ma fin de journée, mon énergie commence à baisser.",
        },
        {
            key: 'B',
            label: 'B : Un petit coup de fatigue classique, mais passager.',
        },
        {
            key: 'C',
            label: "C : En pleine forme, c'est là que ma journée démarre vraiment.",
        },
        {
            key: 'D',
            label: 'D : Fatigué(e) et souvent anxieux(se) ou distrait(e).',
        },
    ],
};

const question4: Question = {
    question: 'À quoi ressemble ta fin de soirée idéale vers 22h ?',
    reponses: [
        {
            key: 'A',
            label: "A : Je dors déjà ou je lutte pour ne pas m'endormir sur le canapé.",
        },
        {
            key: 'B',
            label: 'B : Je commence à me détendre pour aller au lit vers 23h.',
        },
        {
            key: 'C',
            label: "C : C'est mon moment préféré, je déborde d'idées et de créativité.",
        },
        {
            key: 'D',
            label: "D : Je suis fatigué(e), mais j'ai du mal à déconnecter mon cerveau pour m'endormir.",
        },
    ],
};

const question5: Question = {
    question:
        'Si tu dois te coucher très tard ou te lever très tôt pour le travail, comment réagis-tu ?',
    reponses: [
        {
            key: 'A',
            label: 'A : Se lever tôt est facile, mais veiller tard est un calvaire absolu.',
        },
        {
            key: 'B',
            label: "B : Je m'adapte assez bien, tant que je peux récupérer le week-end.",
        },
        {
            key: 'C',
            label: 'C : Veiller tard est naturel, mais me lever tôt gâche toute ma journée.',
        },
        {
            key: 'D',
            label: 'D : Les deux scénarios perturbent mon sommeil pour les trois prochains jours.',
        },
    ],
};

interface DiagnoticChronotypeProps {
    precedent: () => void;
    suivant: () => void;

    reponses: {
        reponse1: string;
        reponse2: string;
        reponse3: string;
        reponse4: string;
        reponse5: string;
    };
    handleChangeReponse: (key: string, value: string) => void;
}

export function DiagnoticChronotype({
    precedent,
    suivant,
    reponses,
    handleChangeReponse,
}: DiagnoticChronotypeProps) {
    const bloqueBoutonSuivant =
        !reponses.reponse1 ||
        !reponses.reponse2 ||
        !reponses.reponse3 ||
        !reponses.reponse4 ||
        !reponses.reponse5;

    return (
        <OnboardingLayout>
            <h1 className="mb-8 text-xl font-semibold text-muted-foreground">
                Diagnostic chronotype
            </h1>

            <div className="mb-4 flex flex-col gap-10">
                {/* Question 1 */}
                <div className="flex flex-col gap-5">
                    <h4 className="text-muted-foreground">
                        {question1.question}
                    </h4>
                    <div className="flex flex-col gap-2">
                        {question1.reponses.map((r) => (
                            <div
                                key={r.key}
                                onClick={() =>
                                    handleChangeReponse('reponse1', r.key)
                                }
                                className={`cursor-pointer rounded-md border border-input bg-background p-2 shadow-xs hover:bg-accent hover:text-accent-foreground ${reponses.reponse1 === r.key && 'bg-primary text-white'}`}
                            >
                                {r.label}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Question 2 */}
                <div className="flex flex-col gap-5">
                    <h4 className="text-muted-foreground">
                        {question2.question}
                    </h4>
                    <div className="flex flex-col gap-2">
                        {question2.reponses.map((r) => (
                            <div
                                key={r.key}
                                onClick={() =>
                                    handleChangeReponse('reponse2', r.key)
                                }
                                className={`cursor-pointer rounded-md border border-input bg-background p-2 shadow-xs hover:bg-accent hover:text-accent-foreground ${reponses.reponse2 === r.key && 'bg-primary text-white'}`}
                            >
                                {r.label}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Question 3 */}
                <div className="flex flex-col gap-5">
                    <h4 className="text-muted-foreground">
                        {question3.question}
                    </h4>
                    <div className="flex flex-col gap-2">
                        {question3.reponses.map((r) => (
                            <div
                                key={r.key}
                                onClick={() =>
                                    handleChangeReponse('reponse3', r.key)
                                }
                                className={`cursor-pointer rounded-md border border-input bg-background p-2 shadow-xs hover:bg-accent hover:text-accent-foreground ${reponses.reponse3 === r.key && 'bg-primary text-white'}`}
                            >
                                {r.label}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Question 4 */}
                <div className="flex flex-col gap-5">
                    <h4 className="text-muted-foreground">
                        {question4.question}
                    </h4>
                    <div className="flex flex-col gap-2">
                        {question4.reponses.map((r) => (
                            <div
                                key={r.key}
                                onClick={() =>
                                    handleChangeReponse('reponse4', r.key)
                                }
                                className={`cursor-pointer rounded-md border border-input bg-background p-2 shadow-xs hover:bg-accent hover:text-accent-foreground ${reponses.reponse4 === r.key && 'bg-primary text-white'}`}
                            >
                                {r.label}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Question 4 */}
                <div className="flex flex-col gap-5">
                    <h4 className="text-muted-foreground">
                        {question5.question}
                    </h4>
                    <div className="flex flex-col gap-2">
                        {question5.reponses.map((r) => (
                            <div
                                key={r.key}
                                onClick={() =>
                                    handleChangeReponse('reponse5', r.key)
                                }
                                className={`cursor-pointer rounded-md border border-input bg-background p-2 shadow-xs hover:bg-accent hover:text-accent-foreground ${reponses.reponse5 === r.key && 'bg-primary text-white'}`}
                            >
                                {r.label}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <Button onClick={precedent}>Précédent</Button>
                <Button onClick={suivant} disabled={bloqueBoutonSuivant}>Suivant</Button>
            </div>
        </OnboardingLayout>
    );
}
