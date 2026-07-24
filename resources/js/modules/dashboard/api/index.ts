import axios from 'axios';

export default async function evolution(period: string) {
    try {
        const response = await axios.get(`/evolution/${period}`);
        return response.data;
    } catch (error) {
        console.log('Erreur survenue dans evolution', error);
    }
}
