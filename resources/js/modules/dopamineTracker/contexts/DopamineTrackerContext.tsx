import { createContext, useContext, useState } from 'react';
import { TimelineEvent } from '../types';
import { Gamepad2, Minimize2, Smartphone } from 'lucide-react';

export interface DopamineTrackerContextType {
    stimulus: TimelineEvent[];
    updateLog: (newStimulus: TimelineEvent) => void;
}

export const DopamineTrackerContext =
    createContext<DopamineTrackerContextType | null>(null);

export const DopamineTrackerProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [stimulus, setStimulus] = useState<TimelineEvent[]>([
        { hour: 4, type: 'fast', icon: Gamepad2, label: 'Jeu vidéo' },
        {
            hour: 12,
            type: 'cluster',
            icon: Minimize2,
            label: 'Plusieurs activités',
        },
        { hour: 20, type: 'fast', icon: Smartphone, label: 'Téléphone' },
    ]);

    // Mise à jour de l'etat Stimulus
    const updateLog = (newStimulus: TimelineEvent) => {
        setStimulus((prev) => ([...prev, newStimulus]));
    }

    return (
        <DopamineTrackerContext.Provider value={{ stimulus, updateLog }}>
            {children}
        </DopamineTrackerContext.Provider>
    );
};


export const useDopamineTracker = () => {
    const context = useContext(DopamineTrackerContext);

    if (!context) {
        throw new Error("UseDopamineTracker doit etre utilisé dans DopamineTrackerProvider");
    }

    return context;
};
