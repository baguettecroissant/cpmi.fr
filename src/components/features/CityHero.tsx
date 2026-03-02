"use client";

import { City } from "@/types";
import { Prestation } from "@/lib/prestations";
import { Button } from "@/components/ui/button";
import { FileText, MapPin } from "lucide-react";

interface CityHeroProps {
    city: City;
    prestation: Prestation;
}

export function CityHero({ city, prestation }: CityHeroProps) {
    const heroImages: Record<string, string> = {
        'installation-ascenseur': '/hero-ascenseur.png',
        'climatisation-entreprise': '/hero-climatisation.png',
        'borne-de-recharge-pro': '/hero-bornes.png',
    };

    const heroImage = heroImages[prestation.slug] || '/hero-ascenseur.png';

    return (
        <section className="relative flex items-center overflow-hidden bg-slate-950 py-16 lg:py-24">
            <div className="absolute inset-0 z-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={heroImage}
                    alt={`${prestation.label} à ${city.name}`}
                    className="w-full h-full object-cover opacity-30 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-md border border-blue-500/20 text-blue-300 px-4 py-2 rounded-full font-medium mb-6 text-sm uppercase tracking-wide">
                    <MapPin className="h-4 w-4" />
                    <span>Experts qualifiés à {city.name} ({city.zip})</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                    {prestation.shortLabel} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">à {city.name}</span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-3xl font-light mx-auto md:mx-0">
                    Comparez les professionnels certifiés dans le {city.department_name} ({city.region}).
                    Obtenez jusqu&apos;à 3 devis gratuits, sans engagement et adaptés aux pros.
                </p>

                <div className="flex flex-col sm:flex-row items-center md:justify-start justify-center gap-4">
                    <a href="#devis" className="w-full sm:w-auto">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white text-lg px-8 h-16 w-full shadow-xl shadow-blue-900/50 rounded-xl font-bold transition-all hover:-translate-y-1">
                            <FileText className="mr-3 h-5 w-5" />
                            Recevoir mes devis gratuits
                        </Button>
                    </a>
                    <p className="text-sm text-slate-400 mt-2 sm:mt-0 font-medium">
                        Réponse sous 48h
                    </p>
                </div>
            </div>
        </section>
    );
}
