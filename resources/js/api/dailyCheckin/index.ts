import { CreateDailyData } from "@/types";
import axios from "axios";

export const saveDailyCheckin  = async (data: CreateDailyData) => {
       try {
        const response = await axios.post(`/daily-checkin`, data);
        return response.data;
    } catch (error) {
        console.log('Erreur survenue dans saveDailyCheckin', error);
    }
}