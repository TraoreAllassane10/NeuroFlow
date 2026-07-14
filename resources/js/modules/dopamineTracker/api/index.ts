import axios from 'axios';

export const createStimulus = async (data: any) => {
    try {
        const response = await axios.post('/dopamine-tracker/create', data);
        return response.data;
    } catch (error) {
        console.log('Erreur survenue dans createStimulus', error);
    }
};
