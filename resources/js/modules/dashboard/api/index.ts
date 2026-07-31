import axios from 'axios';

export const evolution = async (period: string) => {
    try {
        const response = await axios.get(`/evolution/${period}`);
        return response.data;
    } catch (error) {
        console.log('Erreur survenue dans evolution', error);
    }
};

export const recommendation = async (id: number) => {
    try {
        const response = await axios.get(`/recommendation/${id}`);
        return response.data;
    } catch (error) {
        console.log('Erreur survenue dans recommendation', error);
    }
};

export const recommendationCommeFaite = async (id: number) => {
    try {
        const response = await axios.get(`/recommendation/${id}/accompli`);
        return response.data;
    } catch (error) {
        console.log('Erreur survenue dans recommendationCommeFaite', error);
    }
};
