import { DiagnoticChronotype } from '@/components/onboarding/diagnostic-chronotype';
import PremierCheckin from '@/components/onboarding/premier-checkin';
import ProfilClinique from '@/components/onboarding/profil-clinique';
import ProgressionEtape from '@/components/onboarding/progession-etpae';
import { useState } from 'react';

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

    const handleChangeReponse = (key: string, value: string) => {
        setReponses((prev) => ({ ...prev, [key]: value }));
    };

    const etapeSuivante = () => {
        if (etape < 3) {
            setEtape((prev) => prev + 1);
        }
    };

    const etapePrecedente = () => {
        if (etape > 1) {
            setEtape((prev) => prev - 1);
        }
    };

    const onSubmit = () => {
        console.log(
            age,
            objectif_principal,
            reponses,
            mood,
            sleepQuality,
            energyLevel,
            notes,
        );
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
                <ProgressionEtape etapeActuelle={etape} etapes={ETAPES_LABELS} />
            </div>

            {renderEtape()}
        </div>
    );
};

export default Onboarding;
