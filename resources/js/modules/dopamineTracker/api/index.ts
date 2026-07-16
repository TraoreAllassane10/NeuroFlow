import axios from 'axios';

export const stimulusParId = async (id: number) => {
     try {
        const response = await axios.get(`/dopamine-tracker/${id}/show`);
        return response.data;
    } catch (error) {
        console.log('Erreur survenue dans stimulusParId', error);
    }
}

export const stimulusParDate = async (date: string) => {
    try {
        const response = await axios.get(`/dopamine-tracker/par-date?date=${date}`);
        return response.data;
    } catch (error) {
        console.log('Erreur survenue dans stimulusParDate', error);
    }
};

export const getChartData = async () => {
   try {
        const response = await axios.get(`/dopamine-tracker/chart`);
        return response.data;
    } catch (error) {
        console.log('Erreur survenue dans getChartData', error);
    }
}

export const createStimulus = async (data: any) => {
    try {
        const response = await axios.post('/dopamine-tracker/create', data);
        return response.data;
    } catch (error) {
        console.log('Erreur survenue dans createStimulus', error);
    }
};

export const destroyStimuli = async (id: number) => {
     try {
        const response = await axios.delete(`/dopamine-tracker/${id}/delete`);
        return response.data;
    } catch (error) {
        console.log('Erreur survenue dans destroyStimuli', error);
    }
}
