import { notFound } from "next/navigation";
import fs from 'fs';
import path from 'path';
import { getCityFromSlug, generateCityMetadata } from "@/lib/seo-utils";
import { getCityIntro } from "@/lib/text-utils";
import { CityHero } from "@/components/features/CityHero";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { DepartmentBreadcrumb } from "@/components/psea/DepartmentBreadcrumb";
import { NearbyCitiesModule } from "@/components/psea/NearbyCitiesModule";
import { Metadata } from "next";
import { StepsModule } from "@/components/psea/StepsModule";
import { StickyMobileCTA } from "@/components/psea/StickyMobileCTA";
import { CrossSiloLinks } from "@/components/psea/CrossSiloLinks";
import { ViteUnDevisWidget } from "@/components/widgets/ViteUnDevisWidget";
import { PRESTATIONS, getPrestationBySlug, Prestation } from "@/lib/prestations";
import { ShieldCheck, Euro, Award, Clock, MapPin, CheckCircle2 } from "lucide-react";

// ISR: generate on-demand, cache 24h
export const dynamicParams = true;
export const revalidate = 86400;

type Props = {
    params: Promise<{ prestation: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { prestation: prestationSlug, slug } = await params;
    const city = getCityFromSlug(slug);
    const prestation = getPrestationBySlug(prestationSlug);
    if (!city || !prestation) return {};
    return generateCityMetadata(city, prestation);
}

// Pre-generate top 50 cities per prestation as seed
export async function generateStaticParams() {
    // We import inline to avoid loading 35k cities at module level unnecessarily
    const citiesModule = await import('@/lib/db/cities.json');
    const citiesData = citiesModule.default as any[];
    const sorted = [...citiesData].sort((a: any, b: any) => (b.population || 0) - (a.population || 0));
    const topCities = sorted.slice(0, 50);

    const params: { prestation: string; slug: string }[] = [];
    for (const prestation of PRESTATIONS) {
        for (const city of topCities) {
            params.push({
                prestation: prestation.slug,
                slug: city.slug,
            });
        }
    }
    return params;
}

function getFAQData(city: { name: string; zip: string; department_name: string; department_code: string }, prestation: Prestation) {
    if (prestation.slug === 'installation-ascenseur') {
        return [
            {
                question: `Quel est le coût d'installation d'un ascenseur à ${city.name} ?`,
                answer: `Le prix d'un ascenseur ERP à ${city.name} varie entre 20 000 € et 80 000 € selon le nombre d'étages, le type de technologie (hydraulique, électrique) et les contraintes du bâtiment. Demandez un devis personnalisé pour obtenir un chiffrage précis.`
            },
            {
                question: `Les ascenseurs sont-ils obligatoires en ERP à ${city.name} ?`,
                answer: `Oui, les Établissements Recevant du Public (ERP) sont soumis à la loi accessibilité PMR. Dans le ${city.department_name}, comme partout en France, les ERP neufs doivent obligatoirement être accessibles. Les ERP existants doivent déposer un Ad'AP.`
            },
            {
                question: `Quel délai pour installer un ascenseur à ${city.name} (${city.zip}) ?`,
                answer: `Comptez entre 8 et 16 semaines entre la commande et la mise en service. La durée varie selon la complexité du projet (neuf ou rénovation) et les délais d'obtention des autorisations en copropriété.`
            },
        ];
    }
    if (prestation.slug === 'climatisation-entreprise') {
        return [
            {
                question: `Quel système de climatisation pour une entreprise à ${city.name} ?`,
                answer: `Pour les locaux professionnels à ${city.name}, les systèmes VRV/DRV et les gainables sont les plus adaptés. Le choix dépend de la surface, du nombre de zones et de la réglementation thermique applicable dans le ${city.department_name}.`
            },
            {
                question: `Quel est le coût d'une climatisation tertiaire à ${city.name} ?`,
                answer: `Le budget pour une climatisation professionnelle à ${city.name} varie entre 150 €/m² et 400 €/m² selon la technologie choisie (split, gainable, VRV). Un audit thermique gratuit permet d'affiner le chiffrage.`
            },
            {
                question: `L'entretien est-il obligatoire pour la climatisation en entreprise ?`,
                answer: `Oui, la réglementation impose un entretien annuel obligatoire pour les systèmes de plus de 4 kW. Dans le ${city.department_code}, nos partenaires certifiés proposent des contrats de maintenance adaptés à vos installations.`
            },
        ];
    }
    // borne-de-recharge-pro
    return [
        {
            question: `Combien coûte l'installation de bornes de recharge à ${city.name} ?`,
            answer: `À ${city.name}, le coût d'une borne de recharge professionnelle varie entre 1 500 € et 5 000 € par point de charge (hors travaux électriques). Le prix dépend de la puissance (7 kW à 22 kW) et des travaux de raccordement nécessaires.`
        },
        {
            question: `La qualification IRVE est-elle obligatoire à ${city.name} ?`,
            answer: `Oui, depuis 2017, l'installation de bornes de recharge de plus de 3,7 kW doit être réalisée par un électricien qualifié IRVE. Dans le ${city.department_name}, nos partenaires disposent tous de cette qualification.`
        },
        {
            question: `Quelles aides pour les bornes de recharge en entreprise à ${city.name} ?`,
            answer: `Les entreprises à ${city.name} peuvent bénéficier du programme ADVENIR (jusqu'à 960 € par point de charge) et des aides régionales de la région ${city.department_name}. En copropriété, l'aide peut atteindre 50% du coût.`
        },
    ];
}

function getAiContent(prestationSlug: string, citySlug: string) {
    try {
        const filePath = path.join(process.cwd(), 'src/data/generated', prestationSlug, `${citySlug}.json`);
        if (fs.existsSync(filePath)) {
            const raw = fs.readFileSync(filePath, 'utf8');
            return JSON.parse(raw);
        }
    } catch (e) {
        console.warn(`Could not read AI content for ${prestationSlug}/${citySlug}`);
    }
    return null;
}

export default async function CityPage({ params }: Props) {
    const { prestation: prestationSlug, slug } = await params;
    const city = getCityFromSlug(slug);
    const prestation = getPrestationBySlug(prestationSlug);

    if (!city || !prestation) {
        notFound();
    }

    const aiContent = getAiContent(prestationSlug, slug);
    const introText = aiContent?.introText || getCityIntro(city, prestation);
    const faqData = aiContent?.faq || getFAQData(city, prestation);
    const pricingContext = aiContent?.pricingContext;
    const advantages = aiContent?.advantages || [
        "Installation rapide et conforme aux normes en vigueur",
        "Devis transparent, gratuit et sans engagement",
        "Service après-vente et maintenance garantis",
    ];
    const localContext = aiContent?.localContext;
    const expertAdvice = aiContent?.expertAdvice;

    return (
        <div className="min-h-screen bg-white">
            <SchemaOrg city={city} prestation={prestation} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqData.map((faq: { question: string; answer: string }) => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    })
                }}
            />

            <div className="bg-slate-950 pt-4 pb-0">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="inline-block bg-white/10 backdrop-blur-md rounded-lg px-3 py-1 text-sm text-slate-300 font-medium">
                        <DepartmentBreadcrumb city={city} prestationSlug={prestation.slug} prestationLabel={prestation.shortLabel} />
                    </div>
                </div>
            </div>

            <CityHero city={city} prestation={prestation} />

            {/* Trust bar (Floating) */}
            <div className="relative z-20 -mt-6 md:-mt-8 max-w-5xl mx-auto px-4 w-full mb-12">
                <div className="bg-slate-900/90 backdrop-blur-2xl border border-slate-800 rounded-3xl shadow-xl p-5">
                    <div className="grid grid-cols-2 md:flex justify-between items-center gap-4 text-slate-300 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                        <div className="flex items-center gap-2 lg:justify-center"><Award className="h-5 w-5 text-blue-500 flex-shrink-0" /> Installateurs Certifiés</div>
                        <div className="flex items-center gap-2 lg:justify-center"><Euro className="h-5 w-5 text-blue-500 flex-shrink-0" /> Devis 100% Gratuits</div>
                        <div className="flex items-center gap-2 lg:justify-center"><Clock className="h-5 w-5 text-blue-500 flex-shrink-0" /> Local à {city.name}</div>
                        <div className="flex items-center gap-2 lg:justify-center"><ShieldCheck className="h-5 w-5 text-blue-500 flex-shrink-0" /> SAV Garanti</div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 max-w-7xl">

                <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
                    {/* Left Column: Content */}
                    <div className="lg:col-span-7 space-y-12">
                        {/* Intro Section */}
                        <section>
                            <h2 className="text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">
                                {prestation.label} à <span className="text-blue-600">{city.name}</span>
                            </h2>
                            <div className="prose prose-lg text-slate-600 font-light leading-relaxed">
                                <p>
                                    Situé à <strong>{city.name}</strong> ({city.zip}), dans le département <strong>{city.department_name}</strong> ({city.region}), votre projet B2B requiert une expertise locale. {introText}
                                </p>
                                {pricingContext && (
                                    <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl my-6">
                                        <div className="flex gap-4 items-start">
                                            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-md">
                                                <Euro className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-900 text-lg mb-1 mt-0">Budget & Tarification Locale</h3>
                                                <p className="text-slate-700 m-0 text-base">{pricingContext}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* AI Content: Local Context (V2) */}
                                {localContext && (
                                    <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl my-8">
                                        <h3 className="font-bold text-slate-900 text-xl mb-3 mt-0 flex items-center gap-2">
                                            <MapPin className="h-5 w-5 text-blue-600" />
                                            {localContext.title}
                                        </h3>
                                        <p className="text-slate-700 m-0 text-base leading-relaxed">
                                            {localContext.content}
                                        </p>
                                    </div>
                                )}

                                {/* AI Content: Expert Advice (V2) */}
                                {expertAdvice && (
                                    <blockquote className="border-l-4 border-blue-600 bg-blue-50/50 italic text-slate-700 p-6 rounded-r-2xl my-8">
                                        "{expertAdvice}"
                                        <footer className="not-italic font-semibold text-slate-900 mt-3 text-sm flex items-center gap-2">
                                            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                                                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                                            </div>
                                            L'avis de notre expert local
                                        </footer>
                                    </blockquote>
                                )}

                                <p>
                                    Que ce soit pour une entreprise, une copropriété ou un ERP, nos partenaires certifiés du {city.department_name} interviennent
                                    rapidement pour étudier votre projet de {prestation.shortLabel.toLowerCase()} et vous fournir un chiffrage précis.
                                </p>

                                {/* AI Content: Advantages (Dynamic Replacement) */}
                                <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Pourquoi faire appel à un professionnel partenaire à {city.name} ?</h3>
                                <div className="grid grid-cols-1 gap-4 my-8">
                                    {advantages.map((adv: string, idx: number) => (
                                        <div key={idx} className="flex items-start gap-3 bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:border-blue-300 transition-colors">
                                            <div className="bg-blue-50 p-2 rounded-full mt-0.5 flex-shrink-0">
                                                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                                            </div>
                                            <p className="text-slate-700 m-0 font-medium leading-snug">{adv}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Steps */}
                        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                            <StepsModule city={city} prestation={prestation} />
                        </div>
                    </div>

                    {/* Right Column: Sticky Quote Widget */}
                    <div className="lg:col-span-5 lg:sticky lg:top-8">
                        {/* Quote Widget Section */}
                        <section id="devis">
                            <div className="bg-slate-950 p-[1px] rounded-3xl shadow-2xl overflow-hidden relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-transparent opacity-20 pointer-events-none"></div>
                                <div className="bg-slate-900 p-8 rounded-[23px] relative z-10">
                                    <div className="text-center mb-8">
                                        <div className="inline-block bg-blue-500/20 text-blue-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 border border-blue-500/30">
                                            Service Couverture Nationale
                                        </div>
                                        <h2 className="text-2xl font-bold text-white mb-2 leading-tight">
                                            Comparez les pros certifiés à {city.name}
                                        </h2>
                                        <p className="text-slate-400 font-medium text-sm">
                                            Jusqu&apos;à 3 devis gratuits • Sans engagement
                                        </p>
                                    </div>

                                    {/* ViteUnDevis Integration */}
                                    <div className="bg-white rounded-xl overflow-hidden">
                                        <ViteUnDevisWidget keyword={`${prestation.label} ${city.name}`} />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                {/* FAQ Section */}
                <section className="mb-24 bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200">
                    <div className="max-w-3xl mx-auto text-center mb-10">
                        <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Questions fréquentes sur {city.name}</h2>
                        <p className="text-slate-600">L&apos;expertise locale pour réussir votre projet d&apos;{prestation.shortLabel.toLowerCase()}.</p>
                    </div>
                    <div className="space-y-4 max-w-4xl mx-auto">
                        {faqData.map((faq: { question: string; answer: string }, idx: number) => (
                            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-blue-300 transition-colors">
                                <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-start gap-3">
                                    <span className="text-blue-500">Q.</span>
                                    {faq.question}
                                </h3>
                                <p className="text-slate-600 leading-relaxed font-medium pl-8">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <CrossSiloLinks city={city} currentPrestationSlug={prestation.slug} />
            <NearbyCitiesModule city={city} prestationSlug={prestation.slug} prestationLabel={prestation.shortLabel} />
            <StickyMobileCTA />
        </div>
    );
}
