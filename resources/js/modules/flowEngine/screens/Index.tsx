
import { dashboard } from '@/routes';

import { OptimalWindowCard } from '../components/optimal-window-card';
import { PlanSessionForm } from '../components/plan-session-form';
import { WeekCalendar } from '../components/week-calendar';
import { ChronotypeCard } from '../components/chronotype-card';

export default function Index() {
    return (
       
            //  Calendrier + panneau latéral 
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
                <div className="xl:col-span-2">
                    <WeekCalendar todayIndex={2} />
                </div>

                <div className="flex flex-col gap-4">
                    <ChronotypeCard
                        type="Lion"
                        description="Pic cognitif matinal"
                    />
                    <OptimalWindowCard
                        start="09:00"
                        end="11:30"
                        durationLabel="2h 30m"
                    />
                    <PlanSessionForm />
                </div>
            </div>
      
    );
}

Index.layout = {
    breadcrumbs: [
        {
            title: 'Flow Engine',
            href: dashboard().url,
        },
    ],
};
