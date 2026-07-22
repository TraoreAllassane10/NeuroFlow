import { saveDailyCheckin } from "@/api/dailyCheckin";
import { CreateDailyData } from "@/types";

export default function useDailyCheckin() {
    const createDailyCheckin = async (data: CreateDailyData) => {
        return await saveDailyCheckin(data);
    };

    return { createDailyCheckin };
}
