import { Breadcrumbs } from '@/components/breadcrumbs';
import { SidebarTrigger } from '@/components/ui/sidebar';
import type { BreadcrumbItem as BreadcrumbItemType } from '@/types';
import { Button } from './ui/button';
import { Bell, CheckCircle2, Moon } from 'lucide-react';
import { usePage } from '@inertiajs/react';

export function AppSidebarHeader({
    breadcrumbs = [],
    openDialog,
}: {
    breadcrumbs?: BreadcrumbItemType[];
    openDialog: any;
}) {
    const { checkin } = usePage().props;

    return (
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b border-sidebar-border/50 px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4">
            <div className="flex items-center gap-2">
                <SidebarTrigger className="-ml-1" />
                <Breadcrumbs breadcrumbs={breadcrumbs} />
            </div>

            <div className="flex items-center justify-end gap-3">
                {checkin ? (
                    <div  className="gap-2 text-primary font-medium">
                        Check-in du jour
                    </div>
                ) : (
                    <Button
                        onClick={() => openDialog(true)}
                        className="gap-2 bg-primary hover:bg-primary/90"
                    >
                        <CheckCircle2 className="size-4" />
                        Check-in du jour
                    </Button>
                )}
                <Button variant="outline" size="icon" className="rounded-full">
                    <Bell className="size-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                    <Moon className="size-4" />
                </Button>
            </div>
        </header>
    );
}
