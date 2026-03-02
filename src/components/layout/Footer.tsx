import Link from "next/link";
import { ArrowRight, Building2, ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/60 relative overflow-hidden font-sans">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

            {/* Background subtile glow */}
            <div className="absolute top-[-20%] left-1/4 w-1/2 h-1/2 bg-blue-500/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

                    {/* Brand & Mission */}
                    <div className="col-span-1 lg:col-span-5 pr-0 lg:pr-12">
                        <Link href="/" className="inline-block mb-6 group">
                            <h3 className="text-3xl font-extrabold text-white tracking-tight">
                                CPMI<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:from-blue-300 group-hover:to-cyan-300 transition-colors">.fr</span>
                            </h3>
                        </Link>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-md font-light">
                            La plateforme de référence en France pour l&apos;installation B2B d&apos;ascenseurs, de climatisation tertiaire et de bornes de recharge IRVE.
                        </p>
                        <div className="flex flex-col space-y-3">
                            <div className="flex items-center gap-3 text-slate-300 text-sm">
                                <ShieldCheck className="h-5 w-5 text-emerald-400" />
                                <span>Réseau d&apos;installateurs certifiés (QualiPAC, IRVE, etc.)</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-300 text-sm">
                                <Building2 className="h-5 w-5 text-blue-400" />
                                <span>Spécialiste ERP, industrie et copropriétés</span>
                            </div>
                        </div>
                    </div>

                    {/* Expertise Links */}
                    <div className="col-span-1 lg:col-span-3">
                        <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-sm">Nos Expertises</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/installation-ascenseur" className="text-slate-400 hover:text-blue-400 transition-colors font-medium flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-500 transition-colors"></span>
                                    Ascenseurs & Monte-charges
                                </Link>
                            </li>
                            <li>
                                <Link href="/climatisation-entreprise" className="text-slate-400 hover:text-emerald-400 transition-colors font-medium flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-emerald-500 transition-colors"></span>
                                    Climatisation Tertiaire
                                </Link>
                            </li>
                            <li>
                                <Link href="/borne-de-recharge-pro" className="text-slate-400 hover:text-amber-400 transition-colors font-medium flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-amber-500 transition-colors"></span>
                                    Bornes de Recharge IRVE
                                </Link>
                            </li>
                            <li className="pt-2">
                                <Link href="/annuaire" className="text-slate-400 hover:text-white transition-colors font-medium flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-white transition-colors"></span>
                                    Annuaire des Professionnels
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Ressources & Legals */}
                    <div className="col-span-1 lg:col-span-2">
                        <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-sm">Ressources</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/guides" className="text-slate-400 hover:text-white transition-colors font-medium flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-white transition-colors"></span>
                                    Guides & Essais
                                </Link>
                            </li>
                            <li>
                                <Link href="/devis" className="text-slate-400 hover:text-white transition-colors font-medium flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-white transition-colors"></span>
                                    Comparer les Prix
                                </Link>
                            </li>
                            <li className="pt-2">
                                <Link href="/mentions-legales" className="text-slate-400 hover:text-white transition-colors font-medium flex items-center gap-2 group text-sm opacity-80">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-white transition-colors"></span>
                                    Mentions Légales
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* CTA Action */}
                    <div className="col-span-1 lg:col-span-2">
                        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
                            <h4 className="text-white font-bold mb-3">Un projet pro ?</h4>
                            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                                Obtenez jusqu&apos;à 3 devis gratuits et comparez les installateurs certifiés près de chez vous.
                            </p>
                            <Link
                                href="/devis"
                                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-xl text-sm transition-all group w-full"
                            >
                                Demander un devis <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

            {/* Copyright Bar */}
            <div className="border-t border-slate-800/60 bg-slate-950/80">
                <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 font-medium">
                    <p>© {new Date().getFullYear()} CPMI.fr — Tous droits réservés.</p>
                    <div className="flex items-center gap-6">
                        <span className="hover:text-slate-300 cursor-pointer transition-colors">Made in France</span>
                        <span className="hover:text-slate-300 cursor-pointer transition-colors">Conception B2B</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
