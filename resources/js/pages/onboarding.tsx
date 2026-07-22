import { DiagnoticChronotype } from '@/components/onboarding/diagnostic-chronotype';
import PremierCheckin from '@/components/onboarding/premier-checkin';
import ProfilClinique from '@/components/onboarding/profil-clinique';
import ProgressionEtape from '@/components/onboarding/progession-etpae';
import axios from 'axios';
import { useState } from 'react';
import { router } from '@inertiajs/react';
import { toast } from 'sonner';

const ETAPES_LABELS = ['Profil', 'Chronotype', 'Check-in'];

const Onboarding = () => {
    const [etape, setEtape] = useState(1);

    const [age, setAge] = useState('');
    const [objectif_principal, setObjectifPrincipal] = useState('');
    const [reponses, setReponses] = useState({
        reponse1: '',
        reponse2: '',
        reponse3: '',
        reponse4: '',
        reponse5: '',
    });
    const [mood, setMood] = useState(7);
    const [sleepQuality, setSleepQuality] = useState(5);
    const [energyLevel, setEnergyLevel] = useState(8);
    const [notes, setNotes] = useState('');

    // Mise à jours des reponses aux questions de diagnostic de chronotype
    const handleChangeReponse = (key: string, value: string) => {
        setReponses((prev) => ({ ...prev, [key]: value }));
    };

    // Passer à l'etape suivante
    const etapeSuivante = () => {
        if (etape < 3) {
            setEtape((prev) => prev + 1);
        }
    };

    // Revenir à l'etape précédente
    const etapePrecedente = () => {
        if (etape > 1) {
            setEtape((prev) => prev - 1);
        }
    };

    // Déterminer le chronotype de l'utilisateur
    const determinerChronotype = (reponsesObj: Record<string, string>) => {
        const letters = Object.values(reponsesObj);

        let compteurs: Record<string, number> = {};
        let lettresMajoritaire: string = '';
        let maxOccurrences: number = 0;

        letters.forEach((lettre) => {
            compteurs[lettre] = (compteurs[lettre] || 0) + 1;

            if (compteurs[lettre] > maxOccurrences) {
                maxOccurrences = compteurs[lettre];
                lettresMajoritaire = lettre;
            }
        });

        if (lettresMajoritaire === 'A') {
            return 'Lion';
        } else if (lettresMajoritaire === 'B') {
            return 'Ours';
        } else if (lettresMajoritaire === 'C') {
            return 'Loup';
        } else {
            return 'Dauphin';
        }
    };

    const onSubmit = async () => {
        const chronotype = determinerChronotype(reponses);

        const response = await axios.post('/onboarding', {
            age,
            objectif_principal,
            chronotype,
            mood,
            sleepQuality,
            energyLevel,
            notes,
        });

        if (response.data.success) {
            router.visit('dashboard');
        } else {
            toast.error('La mise à jour du profil a échoué');
        }
    };

    const renderEtape = () => {
        switch (etape) {
            case 1:
                return (
                    <ProfilClinique
                        age={age}
                        setAge={setAge}
                        objectif_principal={objectif_principal}
                        setObjectifPrincipal={setObjectifPrincipal}
                        etapeSuivante={etapeSuivante}
                    />
                );

            case 2:
                return (
                    <DiagnoticChronotype
                        precedent={etapePrecedente}
                        suivant={etapeSuivante}
                        reponses={reponses}
                        handleChangeReponse={handleChangeReponse}
                    />
                );

            case 3:
                return (
                    <PremierCheckin
                        mood={mood}
                        setMood={setMood}
                        sleepQuality={sleepQuality}
                        setSleepQuality={setSleepQuality}
                        energyLevel={energyLevel}
                        setEnergyLevel={setEnergyLevel}
                        notes={notes}
                        setNotes={setNotes}
                        precedent={etapePrecedente}
                        onSubmit={onSubmit}
                    />
                );
        }
    };

    return (
        <div className="min-h-screen py-8">
            <div className="flex flex-col items-center justify-center">
                <ProgressionEtape
                    etapeActuelle={etape}
                    etapes={ETAPES_LABELS}
                />
            </div>

            {renderEtape()}
        </div>
    );
};

export default Onboarding;
