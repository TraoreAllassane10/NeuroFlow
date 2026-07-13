import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { AppSidebar } from '@/components/app-sidebar';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import { CheckInDialog } from '@/components/modals/check-in-dialog';
import type { AppLayoutProps } from '@/types';
import { useState } from 'react';

export default function AppSidebarLayout({
    children,
    breadcrumbs = [],
}: AppLayoutProps) {
    const [openCheckin, setOpenCheckin] = useState(false);

    return (
        <AppShell variant="sidebar">
            {openCheckin && (
                <CheckInDialog
                    open={openCheckin}
                    onOpenChange={setOpenCheckin}
                    onSubmit={() => console.log('ok')}
                />
            )}
            <AppSidebar />
            <AppContent variant="sidebar" className="overflow-x-hidden">
                <AppSidebarHeader breadcrumbs={breadcrumbs} openDialog={setOpenCheckin} />

                <div className="px-6 py-4">{children}</div>
            </AppContent>
        </AppShell>
    );
}
