import axios from 'axios';

export const stimulusParDate = async (date: string) => {
    try {
        const response = await axios.get(`/dopamine-tracker/par-date?date=${date}`, );
        return response.data;
    } catch (error) {
        console.log('Erreur survenue dans stimulusParDate', error);
    }
};

export const createStimulus = async (data: any) => {
    try {
        const response = await axios.post('/dopamine-tracker/create', data);
        return response.data;
    } catch (error) {
        console.log('Erreur survenue dans createStimulus', error);
    }
};
