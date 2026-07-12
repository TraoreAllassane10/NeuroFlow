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
            <div className="flex items-center justify-between rounded-lg bg-emerald-800 px-4 py-2.5 text-sm text-white">
                <span>Reset 7 jours en cours — Jour 3/7</span>
                <a
                    href="#"
                    className="font-medium underline underline-offset-2"
                >
                    Protocol Details
                </a>
            </div>
            {children}
        </AppLayoutTemplate>
    );
}
