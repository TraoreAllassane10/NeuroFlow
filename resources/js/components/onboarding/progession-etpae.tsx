import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface ProgressionEtapeProps {
    etapeActuelle: number;
    etapes: string[];
}

const ProgressionEtape = ({ etapeActuelle, etapes }: ProgressionEtapeProps) => {
    return (
            <div className="w-full max-w-2xl mx-auto px-4">
            <div className="flex items-center">
                {etapes.map((label, index) => {
                    const numero = index + 1;
                    const isCompleted = numero < etapeActuelle;
                    const isActive = numero === etapeActuelle;

                    return (
                        <div key={label} className="flex items-center flex-1 last:flex-none">
                            <div className="flex flex-col items-center gap-2">
                                <div
                                    className={cn(
                                        'flex items-center justify-center w-9 h-9 rounded-xl border-2 text-sm font-medium transition-colors',
                                        isCompleted &&
                                            'bg-emerald-500 border-emerald-500 text-white',
                                        isActive &&
                                            'bg-primary border-primary text-white',
                                        !isCompleted &&
                                            !isActive &&
                                            'bg-muted border-muted-foreground/20 text-muted-foreground',
                                    )}
                                >
                                    {isCompleted ? <Check className="w-4 h-4" /> : numero}
                                </div>
                                <span
                                    className={cn(
                                        'text-xs font-medium whitespace-nowrap',
                                        isActive ? 'text-primary' : 'text-muted-foreground',
                                    )}
                                >
                                    {label}
                                </span>
                            </div>

                            {numero < etapes.length && (
                                <div
                                    className={cn(
                                        'flex-1 h-0.5 mx-2 rounded-xl transition-colors',
                                        isCompleted ? 'bg-emerald-500' : 'bg-muted-foreground/20',
                                    )}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProgressionEtape;
