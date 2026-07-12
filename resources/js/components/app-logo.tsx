import AppLogoIcon from '@/components/app-logo-icon';
import { Brain } from 'lucide-react';

export default function AppLogo() {
    return (
        <>
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-white">
                <Brain className="size-4.5" />
            </div>

            <div className='ml-1 grid flex-1 text-left text-sm group-data-[collapsible=icon]:hidden'>
                <span className='mb-0.5 truncate leading-tight font-semibold'>NeuroFlow</span>
            </div>
        </>
    );
}
