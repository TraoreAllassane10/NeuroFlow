import evolution from '../api';

export default function useDashboard() {
    const getEvolutionData = async (period: '7j' | '30j' | '90j') => {
        const response = await evolution(period);
        return response.data;
    };
    return { getEvolutionData };
}
