import Link from "next/link";
import { City } from "@/types";
import { PRESTATIONS } from "@/lib/prestations";
import { Building2, Thermometer, BatteryCharging, ArrowRight } from "lucide-react";

interface CrossSiloLinksProps {
    city: City;
    currentPrestationSlug: string;
}

const getIcon = (slug: string) => {
    switch (slug) {
        case "installation-ascenseur": return Building2;
        case "climatisation-entreprise": return Thermometer;
        case "borne-de-recharge-pro": return BatteryCharging;
        default: return Building2;
    }
};

export function CrossSiloLinks({ city, currentPrestationSlug }: CrossSiloLinksProps) {
    const otherPrestations = PRESTATIONS.filter(p => p.slug !== currentPrestationSlug);

    if (otherPrestations.length === 0) return null;

    return (
        <section className="bg-slate-50 border-t border-slate-100 py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                    Nos autres expertises à {city.name}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {otherPrestations.map((p) => {
                        const Icon = getIcon(p.slug);

                        // Apply specific branding colors based on the prestation
                        let iconClass = "text-blue-600";
                        let bgClass = "bg-blue-50";
                        let borderHoverClass = "hover:border-blue-400 focus:ring-blue-500";

                        if (p.slug === "climatisation-entreprise") {
                            iconClass = "text-green-600";
                            bgClass = "bg-green-50";
                            borderHoverClass = "hover:border-green-400 focus:ring-green-500";
                        } else if (p.slug === "borne-de-recharge-pro") {
                            iconClass = "text-amber-600";
                            bgClass = "bg-amber-50";
                            borderHoverClass = "hover:border-amber-400 focus:ring-amber-500";
                        }

                        return (
                            <Link
                                key={p.slug}
                                href={`/${p.slug}/${city.slug}`}
                                className={`group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 p-6 bg-white rounded-2xl border border-slate-200 ${borderHoverClass} hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2`}
                            >
                                <div className={`flex items-center justify-center h-14 w-14 rounded-xl ${bgClass} shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                                    <Icon className={`h-7 w-7 ${iconClass}`} />
                                </div>
                                <div className="flex-1 flex flex-col items-center sm:items-start">
                                    <h3 className="font-bold text-slate-900 group-hover:text-slate-800 text-lg mb-2">
                                        {p.shortLabel} à {city.name}
                                    </h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        Découvrez nos installateurs certifiés pour vos projets professionnels dans le département {city.department_name}.
                                    </p>
                                    <span className={`inline-flex items-center gap-1.5 font-semibold text-sm ${iconClass} group-hover:gap-2.5 transition-all mt-auto`}>
                                        Voir les experts <ArrowRight className="h-4 w-4" />
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
