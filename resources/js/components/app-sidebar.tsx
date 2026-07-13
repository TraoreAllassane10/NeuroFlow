import { Link } from '@inertiajs/react';
import { BarChart2, BookOpen, Brain, Flower2, FolderGit2, HelpCircle, LayoutGrid, RotateCcw, Settings, Share2, TrendingUp, Waves } from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import type { NavItem } from '@/types';
import { ScoreUser } from './score-user';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
    {
        title: 'Dopamine Tracker',
        href: '/dopamine-tracker',
        icon: TrendingUp,
    },
    {
        title: 'Flow Engine',
        href: '#',
        icon: Waves,
    },
    {
        title: 'Detox & Reset',
        href: '#',
        icon: RotateCcw,
    },
    {
        title: 'Neuro Coach',
        href: '#',
        icon: Brain,
    },
    {
        title: 'Stress & Cortisol',
        href: '#',
        icon: Flower2,
    },
    {
        title: 'Connexion',
        href: '#',
        icon: Share2,
    },
    {
        title: 'Analytics',
        href: '#',
        icon: BarChart2,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Settings',
        href: '#',
        icon: Settings,
    },
    {
        title: 'Support',
        href: '#',
        icon: HelpCircle,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset" className='border-r border-sidebar-border/60'>
            <SidebarHeader className='gap-3'>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>

                <ScoreUser />
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
