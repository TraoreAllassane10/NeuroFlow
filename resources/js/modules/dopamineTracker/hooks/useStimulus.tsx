import { useState } from 'react';
import {
    createStimulus,
    destroyStimuli,
    getChartData,
    stimulusParDate,
    stimulusParId,
} from '../api';

export default function useStimulus() {
    const [loading, setLoading] = useState<boolean>(false);

    const getStimulusParId = async (id: number) => {
        try {
            setLoading(true);
            const response = await stimulusParId(id);
            return response.data;
        } catch (error) {
            console.log('Erreur servenue dans getStimulusParId', error);
        } finally {
            setLoading(false);
        }
    };

    const getStimulusByDate = async (date: Date) => {
        // formattage de la date sous la forme de 2026/07/14
        const formattedDate = date.toISOString().split('T')[0];

        const response = await stimulusParDate(formattedDate);
        return response.data;
    };

    const getStimulusChartData = async () => {
        const response = await getChartData();
        return response.data;
    };

    const addStimulus = async (data: any) => {
        try {
            setLoading(true);

            const newStimulus = {
                label: data.description,
                categorie: data.category,
                intensite: data.intensity,
                type: data.speed,
                logged_at: data.time,
            };

            const response = await createStimulus(newStimulus);

            return response;
        } catch (error) {
            console.log('Erreur survenue dans addStimulus', error);
        } finally {
            setLoading(false);
        }
    };

    const deleteStimulus = async (id: number) => {
        try {
            setLoading(true);
            const response = await destroyStimuli(id);
            return response;
        } catch (error) {
            console.log('Erreur servenue dans deleteStimulus', error);
        } finally {
            setLoading(false);
        }
    };

    return { addStimulus, getStimulusByDate, getStimulusChartData, getStimulusParId, deleteStimulus, loading };
}
