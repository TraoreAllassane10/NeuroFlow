import OnboardingLayout from "@/layouts/onboarding-layout";
import { BedDouble, Brain, Flame, Hourglass, Smartphone } from "lucide-react";
import { Button } from "../ui/button";
const tranches_age = [
    { key: '18-24', label: '18-24' },
    { key: '25-34', label: '25-34' },
    { key: '35-44', label: '35-44' },
    { key: '45+', label: '45+' },
];

const objectifs = [
    { key: 'motivation', label: 'Augmenter ma motivation', icon: Flame },
    {
        key: 'procrastination',
        label: 'Moins de procrastination',
        icon: Hourglass,
    },
    { key: 'stress', label: 'Gérer mon stress', icon: Brain },
    { key: 'sommeil', label: 'Mieux dormir', icon: BedDouble },
    {
        key: 'reseaux sociaux',
        label: "Sortir d'une addiction aux reseaux",
        icon: Smartphone,
    },
];


export default function ProfilClinique({
    age,
    setAge,
    objectif_principal,
    setObjectifPrincipal,
    etapeSuivante,
}: any) {

    const bloqueBoutonSuivant = !age || !objectif_principal;
        return (
        <OnboardingLayout>
            <h1 className="mb-8 text-xl font-semibold text-muted-foreground">
                Profil Clinique
            </h1>

            {/* Tranches d'age */}
            <div className="mb-6">
                <h3 className="text-md mb-4 font-medium text-muted-foreground">
                    Tranche d'âge
                </h3>

                <div className="flex items-center gap-4">
                    {tranches_age.map((tranche) => (
                        <Button
                            key={tranche.key}
                            variant={'outline'}

                            onClick={() => setAge(tranche.label)}
                            className={`rounded-2xl text-muted-foreground ${tranche.label === age && 'bg-primary text-white'}`}
                        >
                            {tranche.label}
                        </Button>
                    ))}
                </div>
            </div>

            {/* Objectif principaux */}
            <div className="mb-6">
                <h3 className="text-md mb-4 font-medium text-muted-foreground">
                    Objectif principaux
                </h3>

                <div className="grid grid-cols-2 gap-4">
                    {objectifs.map((objectif) => (
                        <Button
                            key={objectif.key}
                            variant={'outline'}

                            onClick={() => setObjectifPrincipal(objectif.label)}
                            className={`flex flex-col items-center justify-center gap-2 p-10 text-muted-foreground transition ${objectif.label === objectif_principal && 'bg-primary text-white'}`}
                        >
                            <objectif.icon />
                            <div>{objectif.label}</div>
                        </Button>
                    ))}
                </div>
            </div>

            <Button className="ml-auto" onClick={etapeSuivante} disabled={bloqueBoutonSuivant}>
                Suivant
            </Button>
        </OnboardingLayout>
    );
}