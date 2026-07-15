import { useState } from 'react';
import { createStimulus, getChartData, stimulusParDate } from '../api';
import { WeeklyDopamine } from '../types';

export default function useStimulus() {
    const [loading, setLoading] = useState<boolean>(false);
    const [dataChart, setDataChart] = useState<WeeklyDopamine | []>([]);

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

    return { addStimulus, getStimulusByDate, getStimulusChartData };
}
