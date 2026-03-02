'use client';

import { useState } from 'react';
import { ViteUnDevisWidget } from '@/components/widgets/ViteUnDevisWidget';
import { PRESTATIONS } from '@/lib/prestations';
import { ArrowLeft, ArrowRight, Building2, Wind, BatteryCharging } from 'lucide-react';

export function QuoteSelectionWidget() {
    const [selectedKeyword, setSelectedKeyword] = useState<string | null>(null);

    // Map slugs to icons
    const getIconInfo = (slug: string) => {
        switch (slug) {
            case 'installation-ascenseur':
                return {
                    icon: Building2,
                    colorClass: 'text-blue-500',
                    bgHoverClass: 'hover:border-blue-500 hover:shadow-blue-100',
                    iconBgClass: 'bg-blue-50',
                };
            case 'climatisation-entreprise':
                return {
                    icon: Wind,
                    colorClass: 'text-green-500',
                    bgHoverClass: 'hover:border-green-500 hover:shadow-green-100',
                    iconBgClass: 'bg-green-50',
                };
            case 'borne-de-recharge-pro':
                return {
                    icon: BatteryCharging,
                    colorClass: 'text-orange-500',
                    bgHoverClass: 'hover:border-orange-500 hover:shadow-orange-100',
                    iconBgClass: 'bg-orange-50',
                };
            default:
                return {
                    icon: Building2,
                    colorClass: 'text-slate-500',
                    bgHoverClass: 'hover:border-slate-500 hover:shadow-slate-100',
                    iconBgClass: 'bg-slate-50',
                };
        }
    };

    if (selectedKeyword) {
        return (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="mb-6 flex items-center justify-between">
                    <button
                        onClick={() => setSelectedKeyword(null)}
                        className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors bg-white border border-slate-200 px-4 py-2 rounded-lg hover:bg-slate-50"
                    >
                        <ArrowLeft className="h-4 w-4" /> Retour aux choix
                    </button>
                    <span className="text-sm font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-full">
                        {selectedKeyword}
                    </span>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                    <ViteUnDevisWidget keyword={selectedKeyword} />
                </div>
            </div>
        );
    }

    return (
        <div className="animate-in fade-in duration-500">
            <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Quel est votre besoin ?</h2>
                <p className="text-slate-500">Sélectionnez le type de travaux pour adapter le formulaire à votre projet.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {PRESTATIONS.map((p) => {
                    const { icon: Icon, colorClass, bgHoverClass, iconBgClass } = getIconInfo(p.slug);

                    return (
                        <button
                            key={p.slug}
                            onClick={() => setSelectedKeyword(p.label)}
                            className={`group flex flex-col items-center text-center p-8 bg-white rounded-2xl border-2 border-slate-100 transition-all focus:outline-none focus:ring-4 focus:ring-blue-100 ${bgHoverClass} hover:-translate-y-1 hover:shadow-xl cursor-pointer w-full`}
                        >
                            <div className={`w-16 h-16 rounded-2xl ${iconBgClass} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <Icon className={`h-8 w-8 ${colorClass}`} />
                            </div>

                            <h3 className="font-bold text-slate-900 text-lg mb-3 group-hover:text-blue-700 transition-colors">
                                {p.shortLabel}
                            </h3>

                            <p className="text-sm text-slate-500 mb-6 flex-grow">
                                Pour {p.label.toLowerCase()}
                            </p>

                            <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:text-blue-800 transition-colors mt-auto">
                                Sélectionner <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
