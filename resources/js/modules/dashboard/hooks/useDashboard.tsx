import { useState } from 'react';
import { evolution, recommendation, recommendationCommeFaite } from '../api';

export default function useDashboard() {
    const [loading, setLoading] = useState(false);

    const getEvolutionData = async (period: '7j' | '30j' | '90j') => {
        const response = await evolution(period);
        return response.data;
    };

    const getRecommendation = async (id: number) => {
        try {
            setLoading(true);

            const response = await recommendation(id);
            return response.data;
        } catch (error) {
            console.log('Erreur lors survenue dans getRecommendation', error);
        } finally {
            setLoading(false);
        }
    };

    const marquerRecommendationCommeFaite = async (id: number) => {
        try {
             setLoading(true);

             const response = await recommendationCommeFaite(id);
             return response;
        } catch (error) {
              console.log('Erreur lors survenue dans marquerRecommendationCommeFaite', error);
        }
        finally
        {
            setLoading(false);
        }
    }

    return { getEvolutionData, getRecommendation, marquerRecommendationCommeFaite, loading };
}
