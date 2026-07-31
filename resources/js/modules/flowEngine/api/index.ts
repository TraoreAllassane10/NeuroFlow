import axios from "axios";
import { CreateSessionData } from "../types";

export async function saveSession(data: CreateSessionData) {
    try {
        const response = await axios.post(`/flow-engine/session/create`, data);
        return response.data;
    } catch (error) {
        console.log('Erreur survenue dans saveSession', error);
        throw error;
    }
}
