import { dashboard } from '@/routes';

import { OptimalWindowCard } from '../components/optimal-window-card';
import { PlanSessionForm } from '../components/plan-session-form';
import { WeekCalendar } from '../components/week-calendar';
import { ChronotypeCard } from '../components/chronotype-card';
import { usePage } from '@inertiajs/react';
import { Auth } from '@/types';
import { Session } from '../types';

interface FlowEngineProps {
    auth: Auth;
    sessions: Session[];
    [key: string] : unknown;
}

export default function Index() {
    const { auth, sessions  } = usePage<FlowEngineProps>().props;
    console.log(sessions);
    return (
        //  Calendrier + panneau latéral
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
            <div className="xl:col-span-2">
                <WeekCalendar todayIndex={2} sessions={sessions} />
            </div>

            <div className="flex flex-col gap-4">
                <ChronotypeCard
                    type={auth.user?.chronotype ?? ''}
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
