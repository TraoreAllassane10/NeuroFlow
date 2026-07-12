import { usePage } from '@inertiajs/react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SidebarMenu, SidebarMenuItem } from '@/components/ui/sidebar';
import type { SharedData } from '@/types';

// Adapte `healthScore` à la vraie source de données (prop Inertia partagée,
// ex: auth.user.health_score) une fois le calcul de score branché côté back.
export function ScoreUser({ healthScore = 88 }: { healthScore?: number }) {
    const { auth } = usePage<SharedData>().props;
    const initials = auth.user.name
        .split(' ')
        .map((part) => part[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();

    return (
        <SidebarMenu>
            <SidebarMenuItem className="flex items-center gap-2 px-2 py-1 group-data-[collapsible=icon]:justify-center">
                <Avatar className="size-8 rounded-full">
                    <AvatarImage src={auth.user.avatar} alt={auth.user.name} />
                    <AvatarFallback className="rounded-full bg-indigo-100 text-xs font-medium text-indigo-700">
                        {initials}
                    </AvatarFallback>
                </Avatar>
                <span className="text-sm text-sidebar-foreground/70 group-data-[collapsible=icon]:hidden">
                    Health Score: <span className="font-medium text-sidebar-foreground">{healthScore}</span>
                </span>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}