import { createStimulus } from '../api';

export default function useStimulus() {
    
    const addStimulus = async (data: any) => {
        
        const newStimulus = {
            label: data.description,
            categorie: data.category,
            intensite: data.intensity,
            type: data.speed,
            logged_at: data.time
        }

        const response = await createStimulus(newStimulus);

        return response;
    };

    return { addStimulus };
}
