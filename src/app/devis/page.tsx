import { QuoteSelectionWidget } from "@/components/widgets/QuoteSelectionWidget";
import { CheckCircle2, ShieldCheck, Clock } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Demande de Devis B2B | CPMI.fr",
    description: "Demandez gratuitement vos devis pour l'installation d'ascenseurs ERP, climatisation tertiaire et bornes IRVE. Comparatif gratuit, sans engagement.",
    robots: {
        index: true,
        follow: true,
    }
};

export default function DevisPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <div className="bg-slate-900 text-white py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6">
                        Comparez les meilleurs artisans pour votre projet <span className="text-blue-400">B2B</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        Installation d'ascenseur ERP, climatisation d'entreprise ou bornes de recharge professionnelles. Obtenez jusqu'à 3 devis gratuits en 48h.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-sm md:text-base text-slate-400">
                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-blue-500" /> Sans engagement
                        </span>
                        <span className="flex items-center gap-2">
                            <ShieldCheck className="h-5 w-5 text-blue-500" /> Professionnels certifiés
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock className="h-5 w-5 text-blue-500" /> Réponse rapide
                        </span>
                    </div>
                </div>
            </div>

            {/* Widget Container */}
            <div className="container mx-auto px-4 max-w-4xl -mt-8 relative z-10 pb-20">
                <QuoteSelectionWidget />

                <div className="mt-8 text-center text-sm text-slate-500">
                    <p>Vos données sont sécurisées et uniquement transmises aux artisans sélectionnés pour votre projet.</p>
                </div>
            </div>
        </div>
    );
}
