import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import type { BreadcrumbItem } from '@/types';

export default function AppLayout({
    breadcrumbs = [],
    children,
}: {
    breadcrumbs?: BreadcrumbItem[];
    children: React.ReactNode;
}) {
  

    return (
        <AppLayoutTemplate breadcrumbs={breadcrumbs}>
            {/* <ProtocolBanner title="Reset 7 jours en cours — Jour 3/7" className='my-4' /> */}

            {children}
        </AppLayoutTemplate>
    );
}
