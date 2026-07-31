import { useState } from 'react';
import { saveSession } from '../api';
import { CreateSessionData } from '../types';

export default function useFlowSession() {
    const [loading, setLoading] = useState<boolean>(false);

    const createSession = async (data: CreateSessionData) => {
        try {
            setLoading(true);

            return await saveSession(data);
        } finally {
            setLoading(false);
        }
    };

    return { createSession, loading };
}
