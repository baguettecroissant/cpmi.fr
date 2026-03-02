import { notFound } from "next/navigation";
import { PRESTATIONS, getPrestationBySlug, Prestation } from "@/lib/prestations";
import { getAllDepartments, getCitiesByDepartment, DepartmentInfo } from "@/lib/cities";
import Link from "next/link";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
    ArrowRight, FileText, MapPin, Building2, Thermometer, BatteryCharging,
    Shield, Clock, Euro, Award, CheckCircle, ChevronRight
} from "lucide-react";
import citiesData from "@/lib/db/cities.json";

// ─── Static Params: generate all 3 hub pages ──────────────────────
export function generateStaticParams() {
    return PRESTATIONS.map(p => ({ prestation: p.slug }));
}

// ─── Metadata ──────────────────────────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { prestation: slug } = await params;
    const p = getPrestationBySlug(slug);
    if (!p) return {};

    const metaMap: Record<string, { title: string; desc: string }> = {
        'installation-ascenseur': {
            title: "Installation Ascenseur & Monte-charge en France | Devis Pro Gratuit — CPMI",
            desc: "Comparez les installateurs d'ascenseurs ERP, monte-charges et élévateurs PMR partout en France. Jusqu'à 3 devis gratuits de professionnels certifiés.",
        },
        'climatisation-entreprise': {
            title: "Climatisation Tertiaire & Industrielle en France | Devis Pro Gratuit — CPMI",
            desc: "Solutions CVC sur-mesure pour bureaux, commerces et ERP. Trouvez un installateur de climatisation professionnelle certifié près de chez vous.",
        },
        'borne-de-recharge-pro': {
            title: "Borne de Recharge Entreprise & Copropriété en France | Installation IRVE — CPMI",
            desc: "Installation de bornes de recharge pour flottes d'entreprise et copropriétés. Installateurs IRVE qualifiés, éligibles ADVENIR. Devis gratuits.",
        },
    };

    const meta = metaMap[slug];
    return {
        title: meta?.title || p.label,
        description: meta?.desc || p.label,
        alternates: {
            canonical: `https://www.cpmi.fr/${slug}`,
        },
    };
}

// ─── Types ─────────────────────────────────────────────────────────
type Props = {
    params: Promise<{ prestation: string }>;
};

// ─── Silo content per prestation (hero, intro, FAQ, pricing) ──────
function getHubContent(slug: string) {
    if (slug === 'installation-ascenseur') {
        return {
            icon: Building2,
            iconColor: "text-blue-600",
            iconBg: "bg-blue-50",
            heroImage: "/hero-ascenseur.png",
            heroTitle: "Installation Ascenseur & Monte-charge",
            heroSubtitle: "Trouvez un installateur certifié pour votre ERP, copropriété ou bâtiment industriel. Comparez jusqu'à 3 devis gratuits.",
            intro: `L'installation d'un ascenseur en ERP (Établissement Recevant du Public) est une obligation légale dans de nombreux cas.
                Que ce soit pour la mise en conformité PMR d'un commerce, l'accessibilité d'une copropriété ou l'installation d'un monte-charge industriel,
                CPMI.fr vous met en relation avec des installateurs qualifiés dans toute la France.`,
            pricing: [
                { label: "Ascenseur 2 arrêts (particulier/copro)", range: "15 000 € – 30 000 €" },
                { label: "Ascenseur ERP 3-5 étages", range: "25 000 € – 60 000 €" },
                { label: "Monte-charge industriel", range: "20 000 € – 80 000 €" },
                { label: "Modernisation / remplacement", range: "15 000 € – 50 000 €" },
                { label: "Contrat de maintenance annuel", range: "1 500 € – 4 000 €/an" },
            ],
            faq: [
                { q: "L'ascenseur est-il obligatoire en ERP ?", a: "Oui, les ERP neufs recevant 50 personnes ou plus, ainsi que les ERP existants de plus de 3 étages, doivent être accessibles aux personnes à mobilité réduite (loi du 11 février 2005). Un Ad'AP doit être déposé pour les mises en conformité." },
                { q: "Combien de temps dure l'installation d'un ascenseur ?", a: "L'installation complète prend entre 8 et 16 semaines selon la complexité : étude technique (2-3 semaines), fabrication (4-8 semaines) et pose (2-4 semaines). En rénovation, des contraintes structurelles peuvent allonger le délai." },
                { q: "Quelles sont les normes à respecter ?", a: "Les ascenseurs doivent respecter la directive européenne 2014/33/UE, la norme NF EN 81-20/50 pour les ascenseurs neufs et la norme NF EN 81-80 pour la modernisation. Un contrôle technique quinquennal est obligatoire." },
                { q: "Quelles aides financières sont disponibles ?", a: "Pour les copropriétés, MaPrimeAdapt' peut financer jusqu'à 70% des travaux d'accessibilité. Les ERP peuvent bénéficier du fonds territorial d'accessibilité. Contactez votre DDTM pour les aides locales." },
            ],
            seoTextBlocks: [
                { title: "Types d'ascenseurs professionnels", content: "Selon votre projet, plusieurs technologies s'offrent à vous : ascenseur électrique (le plus courant et économe en énergie), ascenseur hydraulique (idéal pour les charges lourdes et monte-charges), ascenseur pneumatique (installation rapide, sans gaine maçonnée) et plateforme élévatrice PMR (solution économique pour 2-3 niveaux)." },
                { title: "Réglementation et obligations", content: "La loi impose un entretien régulier par un technicien qualifié (au minimum 1 visite par mois) et un contrôle technique quinquennal par un organisme agréé. Le propriétaire doit tenir à jour un carnet d'entretien et un dossier technique. En copropriété, le syndic est responsable de ces obligations." },
            ],
        };
    }
    if (slug === 'climatisation-entreprise') {
        return {
            icon: Thermometer,
            iconColor: "text-green-600",
            iconBg: "bg-green-50",
            heroImage: "/hero-climatisation.png",
            heroTitle: "Climatisation Tertiaire & Industrielle",
            heroSubtitle: "Installation, maintenance et dépannage de systèmes CVC pour bureaux, commerces et bâtiments industriels.",
            intro: `La climatisation tertiaire et industrielle est un enjeu majeur de productivité et de confort pour les entreprises.
                Entre réglementation thermique RT 2020, obligations de maintenance et choix technologiques (VRV, gainable, split),
                le recours à un installateur professionnel certifié est indispensable. CPMI.fr référence les meilleurs spécialistes CVC de France.`,
            pricing: [
                { label: "Split mural (bureau < 50 m²)", range: "1 500 € – 4 000 €" },
                { label: "Cassette encastrable (commerce)", range: "3 000 € – 6 000 €" },
                { label: "Système gainable (plateau de bureau)", range: "8 000 € – 25 000 €" },
                { label: "VRV/DRV (bâtiment multi-zones)", range: "150 € – 400 €/m²" },
                { label: "Contrat de maintenance annuel", range: "500 € – 3 000 €/an" },
            ],
            faq: [
                { q: "Quelle puissance de climatisation pour mes locaux ?", a: "En règle générale, comptez 100 W/m² pour des bureaux standard et jusqu'à 150-200 W/m² pour des locaux à fort apport calorifique (serveurs, cuisine, vitrine). Un bilan thermique gratuit par un professionnel permet de dimensionner précisément l'installation." },
                { q: "L'entretien est-il obligatoire ?", a: "Oui, la réglementation impose un entretien annuel pour les systèmes de plus de 4 kW de puissance frigorifique (décret 2020-912). Pour les systèmes de plus de 70 kW, une inspection quinquennale par un organisme certifié est obligatoire." },
                { q: "Quel système choisir pour un open space ?", a: "Pour un plateau de bureau, le système gainable est le plus adapté : discret (intégré au faux-plafond), silencieux et homogène. Pour un bâtiment multi-étages, un système VRV/DRV offre le meilleur rapport performance/flexibilité avec gestion zone par zone." },
                { q: "Quelles aides pour la climatisation en entreprise ?", a: "Les entreprises peuvent bénéficier des CEE (Certificats d'Économie d'Énergie) pour l'installation de pompes à chaleur air/air performantes. Les systèmes réversibles avec un SCOP > 3.5 sont éligibles. Certaines régions proposent des aides complémentaires." },
            ],
            seoTextBlocks: [
                { title: "Technologies de climatisation professionnelle", content: "Le marché de la climatisation tertiaire propose plusieurs solutions : les systèmes split (mono ou multi) pour les petits locaux, les cassettes encastrables pour les commerces avec faux-plafond, les systèmes gainables (climatisation centralisée discrète) et les systèmes VRV/DRV (Variable Refrigerant Volume) pour les grands bâtiments avec gestion individuelle des zones." },
                { title: "Normes et réglementation thermique", content: "Tout professionnel doit être titulaire de l'attestation de capacité fluides frigorigènes. Les installations neuves doivent respecter la RE 2020 (ex-RT 2012). Le choix du fluide frigorigène est réglementé (F-Gas) : les nouveaux systèmes utilisent le R-32 ou R-410A en remplacement du R-22 interdit." },
            ],
        };
    }
    // borne-de-recharge-pro
    return {
        icon: BatteryCharging,
        iconColor: "text-amber-600",
        iconBg: "bg-amber-50",
        heroImage: "/hero-bornes.png",
        heroTitle: "Borne de Recharge Entreprise & Copropriété",
        heroSubtitle: "Installation de bornes IRVE pour flottes d'entreprise, parkings professionnels et copropriétés. Installateurs qualifiés IRVE.",
        intro: `Avec l'essor du véhicule électrique, l'installation de bornes de recharge est devenue un enjeu stratégique pour les entreprises et copropriétés.
            Obligation réglementaire pour les parkings de plus de 10 places (loi LOM), avantage compétitif pour attirer clients et collaborateurs,
            la borne de recharge est un investissement rentable. CPMI.fr vous connecte avec des installateurs qualifiés IRVE dans toute la France.`,
        pricing: [
            { label: "Borne 7 kW (AC, prise Type 2)", range: "1 200 € – 2 500 €" },
            { label: "Borne 22 kW (AC, triphasé)", range: "2 500 € – 5 000 €" },
            { label: "Borne 50 kW+ (DC, charge rapide)", range: "15 000 € – 50 000 €" },
            { label: "Infrastructure multi-bornes (10 points)", range: "15 000 € – 40 000 €" },
            { label: "Supervision & maintenance/an", range: "200 € – 600 €/borne" },
        ],
        faq: [
            { q: "La qualification IRVE est-elle obligatoire ?", a: "Oui, depuis le décret n°2017-26, toute installation de bornes de recharge de plus de 3,7 kW doit être réalisée par un électricien disposant de la qualification IRVE (Infrastructure de Recharge pour Véhicule Électrique), délivrée par Qualifelec ou AFNOR." },
            { q: "Quelles sont les aides disponibles ?", a: "Le programme ADVENIR finance jusqu'à 50% du coût (plafond 960 € en copropriété, 1 860 € en entreprise accessible au public). La prime est cumulable avec les aides régionales. Pour les copropriétés, un droit à la prise existe depuis 2014." },
            { q: "Combien de bornes prévoir pour mon parking ?", a: "La loi LOM impose un pré-équipement de 20% des places pour les parkings neufs de plus de 10 places (50% en résidentiel). En pratique, on recommande d'équiper 10-15% des places avec des bornes actives, en prévoyant l'infrastructure pour une extension future." },
            { q: "Quelle puissance choisir ?", a: "Pour un usage quotidien en entreprise, les bornes 7 à 22 kW (AC) suffisent : elles rechargent un véhicule en 2 à 8 heures. Les bornes DC (50 kW+) sont réservées aux stations publiques ou flottes avec besoin de rotation rapide. Un audit électrique déterminera la puissance disponible." },
        ],
        seoTextBlocks: [
            { title: "Types de bornes de recharge professionnelles", content: "On distingue trois niveaux : la borne AC lente (3,7-7 kW, idéale pour le résidentiel), la borne AC accélérée (11-22 kW, standard pour l'entreprise) et la borne DC rapide (50 kW et plus, pour les stations publiques). Le choix dépend du temps de stationnement moyen et de la capacité électrique du site." },
            { title: "Réglementation et obligations légales", content: "La loi LOM (2019) et son décret d'application imposent le pré-équipement IRVE des parkings neufs. En copropriété, le droit à la prise permet à tout copropriétaire de demander l'installation d'une borne. L'employeur peut également bénéficier d'avantages fiscaux (amortissement accéléré) pour les bornes installées sur site." },
        ],
    };
}

// ─── Page Component ────────────────────────────────────────────────
export default async function PrestationHubPage({ params }: Props) {
    const { prestation: slug } = await params;
    const prestation = getPrestationBySlug(slug);
    if (!prestation) notFound();

    const content = getHubContent(slug);
    const departments = getAllDepartments();

    // Group departments by region
    const regionsMap = new Map<string, DepartmentInfo[]>();
    departments.forEach(d => {
        const list = regionsMap.get(d.region) || [];
        list.push(d);
        regionsMap.set(d.region, list);
    });
    const sortedRegions = Array.from(regionsMap.keys()).sort();

    // Top cities by population for this prestation
    const allCities = [...citiesData].sort((a, b) => (b.population || 0) - (a.population || 0));
    const topCities = allCities.slice(0, 20);

    const Icon = content.icon;

    // FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": content.faq.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero */}
            <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-slate-950 py-20 lg:py-28">
                <div className="absolute inset-0 z-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={content.heroImage}
                        alt={content.heroTitle}
                        className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10 pt-10">
                    <div className="mb-6 inline-block bg-white/10 backdrop-blur-md rounded-lg px-3 py-1 text-sm text-slate-300 font-medium">
                        <Breadcrumbs items={[{ label: prestation.shortLabel }]} />
                    </div>
                    <div className="max-w-4xl">
                        <div className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-4 py-2 rounded-full font-medium mb-6 uppercase tracking-wider text-sm shadow-sm`}>
                            <Icon className="h-5 w-5" />
                            <span>Expertise Nationale B2B</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 tracking-tight leading-tight text-white drop-shadow-lg">
                            {content.heroTitle}
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-3xl font-light">
                            {content.heroSubtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/devis">
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white text-lg px-8 h-16 rounded-xl shadow-xl shadow-blue-900/50 w-full sm:w-auto font-bold transition-all hover:-translate-y-1 group">
                                    <FileText className="mr-3 h-6 w-6" />
                                    Obtenir jusqu&apos;à 3 devis
                                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust bar (Floating) */}
            <div className="relative z-20 -mt-8 md:-mt-12 max-w-6xl mx-auto px-4 w-full mb-16">
                <div className="bg-slate-900/90 backdrop-blur-2xl border border-slate-800 rounded-3xl shadow-2xl p-6 md:p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-between items-center gap-6 text-slate-100 text-sm font-semibold uppercase tracking-wider">
                        <div className="flex items-center gap-3"><Award className="h-6 w-6 text-blue-500 flex-shrink-0" /> Installateurs Certifiés</div>
                        <div className="flex items-center gap-3"><Euro className="h-6 w-6 text-blue-500 flex-shrink-0" /> Devis 100% Gratuits</div>
                        <div className="flex items-center gap-3"><Clock className="h-6 w-6 text-blue-500 flex-shrink-0" /> Réponse sous 48h</div>
                        <div className="flex items-center gap-3"><Shield className="h-6 w-6 text-blue-500 flex-shrink-0" /> Conformité Garantie</div>
                    </div>
                </div>
            </div>

            {/* Intro + SEO content + Pricing */}
            <section className="py-8 lg:py-16">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid lg:grid-cols-12 gap-12 items-start">

                        {/* Left column: Content */}
                        <div className="lg:col-span-7 space-y-12">
                            <div className="prose prose-lg md:prose-xl prose-slate">
                                <p className="text-slate-600 leading-relaxed font-light">{content.intro}</p>
                            </div>

                            {/* SEO content blocks */}
                            <div className="grid sm:grid-cols-2 gap-6">
                                {content.seoTextBlocks.map((block, i) => (
                                    <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                                            <Shield className="h-6 w-6 text-blue-600" />
                                        </div>
                                        <h2 className="text-xl font-bold text-slate-900 mb-4">{block.title}</h2>
                                        <p className="text-slate-600 leading-relaxed text-sm">{block.content}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right column: Pricing Sticky */}
                        <div className="lg:col-span-5 lg:sticky lg:top-8">
                            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
                                <div className="bg-slate-900 px-8 py-6">
                                    <h2 className="text-xl font-bold text-white flex items-center gap-3">
                                        <Euro className="h-6 w-6 text-emerald-400" />
                                        Tarifs {prestation.shortLabel}
                                    </h2>
                                    <p className="text-slate-400 text-sm mt-2 font-light">Estimations moyennes 2026</p>
                                </div>
                                <div className="divide-y divide-slate-100">
                                    {content.pricing.map((item, i) => (
                                        <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between px-8 py-5 hover:bg-slate-50 transition-colors gap-2">
                                            <span className="text-slate-700 font-medium">{item.label}</span>
                                            <span className="text-blue-600 font-bold whitespace-nowrap bg-blue-50 px-3 py-1 rounded-full text-sm self-start sm:self-auto">{item.range}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-slate-50 px-8 py-4 text-xs text-slate-500 border-t border-slate-100 flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-slate-400" />
                                    Tarifs indicatifs hors travaux annexes complexes.
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Top cities */}
            <section className="py-24 bg-slate-100/50 border-t border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-3">
                            <MapPin className="h-8 w-8 text-blue-600" />
                            {prestation.shortLabel} dans les grandes villes
                        </h2>
                        <p className="text-slate-600">Trouvez un installateur qualifié près de chez vous dans les principales agglomérations françaises.</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {topCities.map(city => (
                            <Link
                                key={city.slug}
                                href={`/${slug}/${city.slug}`}
                                className="group flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-lg hover:-translate-y-1 transition-all"
                            >
                                <span className="text-slate-700 font-bold group-hover:text-blue-700 truncate">{city.name}</span>
                                <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-blue-500 flex-shrink-0" />
                            </Link>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/annuaire" className="text-blue-600 font-bold hover:text-blue-800 inline-flex items-center gap-2 bg-blue-50 hover:bg-blue-100 px-6 py-3 rounded-full transition-colors">
                            Voir toutes les villes par département <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Departments by region */}
            <section className="py-24 bg-slate-900 text-white border-t border-slate-800">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-extrabold text-white mb-4">
                            Notre réseau en régions
                        </h2>
                        <p className="text-slate-400">Intervention rapide sur l&apos;ensemble du territoire national.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {sortedRegions.map(region => (
                            <div key={region} className="bg-slate-800/50 rounded-3xl border border-slate-700/50 overflow-hidden backdrop-blur-sm hover:border-slate-600 transition-colors">
                                <div className="bg-slate-800/80 px-6 py-4 border-b border-slate-700/50">
                                    <h3 className="font-bold text-lg text-slate-100 flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-emerald-400" /> {region}
                                    </h3>
                                </div>
                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2">
                                        {regionsMap.get(region)?.map(dept => {
                                            const deptSlug = `${dept.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}-${dept.code}`;
                                            return (
                                                <Link
                                                    key={dept.code}
                                                    href={`/annuaire/${deptSlug}`}
                                                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-700/50 border border-slate-600 text-slate-300 hover:border-emerald-400 hover:bg-emerald-900/30 hover:text-emerald-300 transition-colors"
                                                >
                                                    <span className="font-mono text-emerald-500/80">{dept.code}</span>
                                                    {dept.name}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-slate-900 mb-4">FAQ : Vos questions fréquentes</h2>
                        <p className="text-slate-600">Tout savoir sur l&apos;{prestation.label.toLowerCase()}</p>
                    </div>
                    <Accordion type="single" collapsible className="w-full bg-white border border-slate-200 rounded-3xl p-4 shadow-sm">
                        {content.faq.map((faq, idx) => (
                            <AccordionItem key={idx} value={`faq-${idx}`} className="border-b-0 mb-2 last:mb-0 bg-slate-50 hover:bg-blue-50/50 rounded-2xl transition-colors px-4">
                                <AccordionTrigger className="text-lg font-bold text-slate-800 text-left py-4 hover:no-underline">{faq.q}</AccordionTrigger>
                                <AccordionContent className="text-slate-600 leading-relaxed font-medium pb-4">{faq.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* spectacular CTA */}
            <section className="py-32 relative overflow-hidden bg-slate-950">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-emerald-900 z-0 opacity-50"></div>

                {/* Visual elements */}
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 tracking-tight leading-tight">
                        Prêt à concrétiser votre installation ?
                    </h2>
                    <p className="text-xl md:text-2xl text-blue-100 text-opacity-80 mb-12 font-light">
                        Recevez jusqu&apos;à 3 propositions commerciales détaillées de la part d&apos;installateurs de votre région.
                    </p>
                    <Link href="/devis">
                        <Button size="lg" className="bg-white text-slate-900 hover:bg-blue-50 text-xl px-12 h-20 rounded-2xl shadow-[0_15px_40px_-10px_rgba(255,255,255,0.2)] transition-all transform hover:-translate-y-1 hover:shadow-[0_20px_50px_-10px_rgba(255,255,255,0.3)] group font-extrabold">
                            Lancer ma demande de devis
                            <ArrowRight className="ml-3 h-7 w-7 text-blue-600 group-hover:translate-x-2 transition-transform" />
                        </Button>
                    </Link>
                    <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-300 font-medium">
                        <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> 100% Gratuit</span>
                        <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Sans engagement</span>
                        <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Gain de temps</span>
                    </div>
                </div>
            </section>

            {/* Cross-link other prestations */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Découvrez nos autres spécialités B2B</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {PRESTATIONS.filter(p => p.slug !== slug).map(p => (
                            <Link
                                key={p.slug}
                                href={`/${p.slug}`}
                                className="group flex items-center gap-6 p-6 rounded-3xl border border-slate-200 hover:border-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all bg-white"
                            >
                                <div className="flex-1">
                                    <span className="font-extrabold text-lg text-slate-900 group-hover:text-blue-600 block mb-1 transition-colors">{p.shortLabel}</span>
                                    <span className="text-sm font-medium text-slate-500">{p.label}</span>
                                </div>
                                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                    <ArrowRight className="h-6 w-6 text-slate-400 group-hover:text-blue-600 transition-colors" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
