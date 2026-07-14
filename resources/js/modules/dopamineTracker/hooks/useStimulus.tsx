import { createStimulus, stimulusParDate } from '../api';

export default function useStimulus() {
    const getStimulusByDate = async (date: Date) => {
        // formattage de la date sous la forme de 2026/07/14
        const formattedDate = date.toISOString().split('T')[0];

        const response = await stimulusParDate(formattedDate);
        return response.data;
    };

    const addStimulus = async (data: any) => {
        const newStimulus = {
            label: data.description,
            categorie: data.category,
            intensite: data.intensity,
            type: data.speed,
            logged_at: data.time,
        };

        const response = await createStimulus(newStimulus);

        return response;
    };

    return { addStimulus, getStimulusByDate };
}
