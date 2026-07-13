interface ProtocolBannerProps {
    title: string;
    ctaLabel?: string;
    ctaHref?: string;
}

export function ProtocolBanner({ title, ctaLabel = 'Protocol Details', ctaHref = '#' }: ProtocolBannerProps) {
    return (
        <div className="flex items-center justify-between rounded-lg bg-emerald-800 px-4 py-2.5 text-sm text-white">
            <span>{title}</span>
            <a href={ctaHref} className="font-medium underline underline-offset-2">
                {ctaLabel}
            </a>
        </div>
    );
}