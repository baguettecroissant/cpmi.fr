import Link from "next/link";
import { GUIDES } from "@/data/guides";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Shield, Star, MapPin, Euro, Clock, Zap, Award, Building2, BookOpen } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.cpmi.fr',
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/homepage_hero.png"
            alt="CPMI B2B Installation - Ascenseur, Climatisation, Bornes IRVE"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20 pb-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 backdrop-blur-md text-blue-300 px-5 py-2 rounded-full text-sm font-semibold mb-8">
              <Star className="h-4 w-4 fill-blue-400 text-blue-400" />
              <span>Expert B2B en France (2026)</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
              Installation Pro :<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                Ascenseur, Clim & IRVE
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-light">
              Comparez gratuitement les devis de professionnels certifiés pour vos installations d&apos;ascenseurs ERP, de climatisation tertiaire et de bornes de recharge.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <Link href="/devis" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white text-lg px-10 h-16 rounded-2xl shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] transition-all transform hover:-translate-y-1 hover:shadow-[0_0_60px_-15px_rgba(59,130,246,0.7)] group">
                  Comparer les prix gratuitement
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="h-12 w-px bg-slate-700 hidden sm:block"></div>
                <div className="text-sm">
                  <span className="font-bold text-white block text-base border-b border-slate-700 pb-1 mb-1">3 secteurs d&apos;expertise</span>
                  105 000 communes couvertes
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar (Floating) */}
      <div className="relative z-20 -mt-16 md:-mt-16 max-w-6xl mx-auto px-4 w-full">
        <div className="bg-slate-900/90 backdrop-blur-2xl border border-slate-800 rounded-3xl shadow-2xl p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-between items-center gap-6 text-slate-100 text-sm font-semibold uppercase tracking-wider">
            <div className="flex items-center gap-3"><Award className="h-6 w-6 text-blue-400 shrink-0" /> Professionnels Certifiés</div>
            <div className="flex items-center gap-3"><Euro className="h-6 w-6 text-blue-400 shrink-0" /> Devis Gratuits</div>
            <div className="flex items-center gap-3"><Clock className="h-6 w-6 text-blue-400 shrink-0" /> Réponse sous 48h</div>
            <div className="flex items-center gap-3"><Shield className="h-6 w-6 text-blue-400 shrink-0" /> Conformité garantie</div>
          </div>
        </div>
      </div>

      {/* 3 Services Cards */}
      <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/50 rounded-full blur-3xl mix-blend-multiply"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-200/50 rounded-full blur-3xl mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Nos 3 Expertises B2B</h2>
            <p className="text-xl text-slate-600 font-light">
              Des solutions professionnelles pour les entreprises, copropriétés et ERP. Chaque secteur bénéficie de nos partenaires qualifiés et certifiés.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <Link href="/installation-ascenseur" className="group">
              <div className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500 z-0"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Ascenseurs & Monte-charges</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    Installation, modernisation et maintenance d&apos;ascenseurs pour ERP, copropriétés et bâtiments industriels. Conformité PMR garantie.
                  </p>
                  <span className="inline-flex items-center gap-2 text-blue-600 font-bold bg-blue-50 px-4 py-2 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    Trouver un installateur <ArrowRight className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/climatisation-entreprise" className="group">
              <div className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500 z-0"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">Climatisation Tertiaire</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    Solutions CVC sur-mesure pour bureaux, commerces et bâtiments industriels. Gainable, VRV/DRV, pompes à chaleur professionnelles.
                  </p>
                  <span className="inline-flex items-center gap-2 text-emerald-600 font-bold bg-emerald-50 px-4 py-2 rounded-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    Trouver un installateur <ArrowRight className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/borne-de-recharge-pro" className="group">
              <div className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500 z-0"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors">Bornes de Recharge IRVE</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    Installation de bornes pour flottes d&apos;entreprise, parkings pro et copropriétés. Installateurs IRVE qualifiés, éligibles ADVENIR.
                  </p>
                  <span className="inline-flex items-center gap-2 text-amber-600 font-bold bg-amber-50 px-4 py-2 rounded-lg group-hover:bg-amber-600 group-hover:text-white transition-colors">
                    Trouver un installateur <ArrowRight className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced SEO Content Block */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 text-blue-600 font-bold tracking-wider uppercase mb-4 text-sm">
                <Shield className="h-5 w-5" /> Notre Mission
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Pourquoi passer par CPMI.fr pour vos projets B2B ?
              </h2>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
                CPMI.fr est la plateforme de référence pour mettre en relation les entreprises, copropriétés et gestionnaires d&apos;ERP
                avec des professionnels certifiés dans 3 secteurs clés du bâtiment professionnel.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors">
                  <div className="bg-white p-3 rounded-xl shadow-sm text-blue-600 shrink-0">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Ascenseurs ERP</h4>
                    <p className="text-slate-600 leading-relaxed">De 20 000 € à 80 000 € selon la configuration. Obligation légale pour les ERP et copropriétés de plus de 3 étages.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-colors">
                  <div className="bg-white p-3 rounded-xl shadow-sm text-emerald-600 shrink-0">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Climatisation Pro</h4>
                    <p className="text-slate-600 leading-relaxed">De 150 à 400 €/m² pour une installation tertiaire complète. Entretien annuel obligatoire.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-amber-200 transition-colors">
                  <div className="bg-white p-3 rounded-xl shadow-sm text-amber-600 shrink-0">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Bornes IRVE</h4>
                    <p className="text-slate-600 leading-relaxed">De 1 500 à 5 000 € par point de charge. Aide ADVENIR jusqu&apos;à 960 € par borne.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative w-full aspect-square md:aspect-auto md:h-[700px]">
              <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/homepage_hero.png" alt="Installation professionnelle B2B" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex items-end p-8 md:p-12">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-2xl text-white w-full">
                    <div className="flex items-center gap-4 mb-3">
                      <Star className="h-7 w-7 text-yellow-400 fill-yellow-400" />
                      <span className="text-2xl font-bold">4.9/5</span>
                    </div>
                    <p className="text-slate-200 text-lg">Note moyenne basée sur +2000 mises en relation B2B pour les entreprises.</p>
                  </div>
                </div>
              </div>

              {/* Floating element */}
              <div className="absolute -left-12 top-24 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden lg:block animate-pulse">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="h-7 w-7 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium tracking-wide uppercase">Temps de réponse</p>
                    <p className="text-xl font-bold text-slate-900">&lt; 48 heures</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Departments Grid */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Trouvez un professionnel près de chez vous</h2>
              <p className="text-xl text-slate-400 font-light max-w-2xl">
                Notre réseau couvre 100% du territoire français. Sélectionnez votre département pour accéder à l&apos;annuaire des professionnels certifiés.
              </p>
            </div>
            <Link href="/annuaire" className="hidden md:inline-flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold transition-all backdrop-blur-sm h-14">
              Voir tout l&apos;annuaire <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { id: '75', name: 'Paris', slug: 'paris-75' },
              { id: '77', name: 'Seine-et-Marne', slug: 'seine-et-marne-77' },
              { id: '78', name: 'Yvelines', slug: 'yvelines-78' },
              { id: '91', name: 'Essonne', slug: 'essonne-91' },
              { id: '92', name: 'Hauts-de-Seine', slug: 'hauts-de-seine-92' },
              { id: '93', name: 'Seine-St-Denis', slug: 'seine-saint-denis-93' },
              { id: '94', name: 'Val-de-Marne', slug: 'val-de-marne-94' },
              { id: '95', name: 'Val-d\'Oise', slug: 'val-d-oise-95' },
              { id: '69', name: 'Rhône', slug: 'rhone-69' },
              { id: '59', name: 'Nord', slug: 'nord-59' },
              { id: '33', name: 'Gironde', slug: 'gironde-33' },
              { id: '13', name: 'Bouches-du-Rhône', slug: 'bouches-du-rhone-13' },
              { id: '31', name: 'Haute-Garonne', slug: 'haute-garonne-31' },
              { id: '44', name: 'Loire-Atlantique', slug: 'loire-atlantique-44' },
              { id: '76', name: 'Seine-Maritime', slug: 'seine-maritime-76' },
              { id: '34', name: 'Hérault', slug: 'herault-34' },
              { id: '38', name: 'Isère', slug: 'isere-38' },
              { id: '83', name: 'Var', slug: 'var-83' },
            ].map((dept) => (
              <Link
                key={dept.id}
                href={`/annuaire/${dept.slug}`}
                className="group flex flex-col p-5 bg-slate-900 hover:bg-gradient-to-br hover:from-blue-600 hover:to-indigo-600 border border-slate-800 hover:border-transparent rounded-2xl transition-all duration-300"
              >
                <span className="text-4xl font-black text-slate-800 group-hover:text-blue-200 mb-2 transition-colors">{dept.id}</span>
                <span className="font-semibold text-slate-300 group-hover:text-white line-clamp-1">{dept.name}</span>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/annuaire" className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all backdrop-blur-sm w-full h-14">
              Voir tous les départements
            </Link>
          </div>
        </div>
      </section>

      {/* Sleek FAQ */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Questions Fréquentes</h2>
            <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto">Tout ce que vous devez savoir avant de lancer votre projet d&apos;équipement B2B.</p>
          </div>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Quels sont les services proposés par CPMI.fr ?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "CPMI.fr met en relation les professionnels et particuliers avec des installateurs certifiés dans 3 domaines : ascenseurs et monte-charges (ERP, copropriétés), climatisation tertiaire et industrielle, et bornes de recharge IRVE pour flottes d'entreprise."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Comment obtenir un devis gratuit ?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Sélectionnez votre ville et votre secteur d'activité, puis remplissez le formulaire de demande. Vous recevrez jusqu'à 3 devis de professionnels certifiés sous 48h, sans engagement."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Les professionnels sont-ils certifiés ?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Oui, tous nos partenaires disposent des certifications requises : qualifications IRVE pour les bornes de recharge, certifications QualiPAC/Qualifroid pour la climatisation, et agréments ministériels pour les ascenseurs."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Intervenez-vous dans toute la France ?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Oui, notre réseau couvre les 95 départements français métropolitains, soit plus de 35 000 communes. Nous avons des partenaires dans toutes les régions."
                    }
                  }
                ]
              })
            }}
          />

          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border border-slate-100 rounded-2xl px-6 data-[state=open]:bg-slate-50 transition-colors">
                <AccordionTrigger className="text-lg md:text-xl font-bold text-slate-800 hover:no-underline hover:text-blue-600 py-6 text-left">Quels sont les services proposés par CPMI.fr ?</AccordionTrigger>
                <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-6 text-left">
                  CPMI.fr met en relation les professionnels et particuliers avec des installateurs certifiés dans 3 domaines : <strong>ascenseurs et monte-charges</strong> (ERP, copropriétés), <strong>climatisation tertiaire et industrielle</strong>, et <strong>bornes de recharge IRVE</strong> pour flottes d&apos;entreprise.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border border-slate-100 rounded-2xl px-6 data-[state=open]:bg-slate-50 transition-colors">
                <AccordionTrigger className="text-lg md:text-xl font-bold text-slate-800 hover:no-underline hover:text-blue-600 py-6 text-left">Comment obtenir un devis gratuit ?</AccordionTrigger>
                <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-6 text-left">
                  Sélectionnez votre ville et votre secteur d&apos;activité, puis remplissez le formulaire de demande. Vous recevrez jusqu&apos;à 3 devis de professionnels certifiés sous 48h, sans engagement.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border border-slate-100 rounded-2xl px-6 data-[state=open]:bg-slate-50 transition-colors">
                <AccordionTrigger className="text-lg md:text-xl font-bold text-slate-800 hover:no-underline hover:text-blue-600 py-6 text-left">Les professionnels sont-ils certifiés ?</AccordionTrigger>
                <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-6 text-left">
                  Oui, tous nos partenaires disposent des certifications requises : qualifications IRVE pour les bornes de recharge, certifications QualiPAC/Qualifroid pour la climatisation, et agréments ministériels pour les ascenseurs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border border-slate-100 rounded-2xl px-6 data-[state=open]:bg-slate-50 transition-colors">
                <AccordionTrigger className="text-lg md:text-xl font-bold text-slate-800 hover:no-underline hover:text-blue-600 py-6 text-left">Intervenez-vous dans toute la France ?</AccordionTrigger>
                <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-6 text-left">
                  Oui, notre réseau couvre les 95 départements français métropolitains, soit plus de 35 000 communes. Nous avons des partenaires dans toutes les régions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Guides Section (Preview) */}
      <section className="py-24 bg-white border-t border-slate-100 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-blue-600 font-bold tracking-wider uppercase mb-4 text-sm">
                <BookOpen className="h-5 w-5" /> Centre d&apos;expertise
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Guides & Ressources B2B</h2>
              <p className="text-xl text-slate-600 font-light max-w-2xl">
                Réglementation tertiaire, aides de l&apos;État, prix et conseils d&apos;experts pour réussir votre installation.
              </p>
            </div>
            <Link href="/guides" className="hidden md:inline-flex items-center justify-center bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-blue-800 px-6 py-3 rounded-xl font-bold transition-colors">
              Tous nos guides <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {GUIDES.slice(0, 3).map((guide) => (
              <article
                key={guide.slug}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col"
              >
                <div className="aspect-[16/9] bg-slate-100 relative items-center justify-center overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={guide.imagePath ? `${guide.imagePath}?v=1` : 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'}
                    alt={guide.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-slate-700 uppercase tracking-wider shadow-sm">
                    {guide.category}
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
                    <Link href={`/guides/${guide.slug}`} className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {guide.h1}
                    </Link>
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-8 flex-1">
                    {guide.metaDescription}
                  </p>
                  <div className="flex items-center justify-between text-sm mt-auto pt-5 border-t border-slate-100">
                    <span className="text-slate-500 font-medium">{guide.readTime} de lecture</span>
                    <span className="font-bold text-blue-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Lire l&apos;article <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/guides" className="inline-flex items-center justify-center bg-blue-50 text-blue-700 hover:bg-blue-100 px-8 py-4 rounded-xl font-bold transition-all w-full">
              Consulter tous les guides
            </Link>
          </div>
        </div>
      </section>

      {/* Spectacular CTA Footer */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 z-0"></div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-2 rounded-full text-sm font-bold mb-8 uppercase tracking-widest">
            Prêt à lancer votre projet ?
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-tight drop-shadow-lg">
            Comparez et économisez sur votre installation pro.
          </h2>
          <p className="text-2xl text-blue-100 mb-12 font-light">
            Ascenseur, climatisation ou borne de recharge — recevez vos devis en 48h.
          </p>
          <Link href="/devis">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-50 text-xl px-12 h-20 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] transition-all transform hover:-translate-y-1 group font-bold">
              Lancer ma demande de devis
              <ArrowRight className="ml-3 h-7 w-7 group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm md:text-base text-blue-200 font-medium">
            <span className="flex items-center gap-2"><CheckCircle className="h-5 w-5" /> Gratuit</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-5 w-5" /> Sans engagement</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-5 w-5" /> 3 devis maximum</span>
          </div>
        </div>
      </section>
    </div>
  );
}
