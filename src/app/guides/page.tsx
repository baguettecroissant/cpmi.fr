import { Metadata } from 'next';
import Link from 'next/link';
import { GUIDES } from '@/data/guides';
import { BookOpen, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Guides B2B | Installation Ascenseur, Climatisation & Bornes IRVE',
    description: 'Découvrez nos guides d\'experts et dossiers techniques sur les normes, les prix et la réglementation des ascenseurs, climatisations et bornes de recharge pour entreprise.',
};

export default function GuidesHubPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <header className="bg-slate-900 border-b border-slate-800">
                <div className="container mx-auto px-4 py-16 md:py-24 max-w-5xl text-center">
                    <span className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-6 ring-1 ring-blue-500/30">
                        <BookOpen className="w-4 h-4" /> Base de connaissances B2B
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
                        Guides & Dossiers Techniques
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-medium">
                        Réglementation, comparatifs de prix et conseils d'experts pour réussir vos projets d'équipement de bâtiments tertiaires et industriels.
                    </p>
                </div>
            </header>

            {/* Guides Grid */}
            <main className="container mx-auto px-4 py-16 max-w-6xl">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {GUIDES.map((guide) => (
                        <article
                            key={guide.slug}
                            className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-lg transition-all group flex flex-col"
                        >
                            {/* Image Placeholder */}
                            <div className="aspect-[16/9] bg-slate-100 relative overflow-hidden flex items-center justify-center">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={guide.imagePath ? `${guide.imagePath}?v=1` : 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'}
                                    alt={guide.title}
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-700 uppercase tracking-wider">
                                    {guide.category}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-1">
                                <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                                    <Link href={`/guides/${guide.slug}`} className="focus:outline-none">
                                        <span className="absolute inset-0" aria-hidden="true" />
                                        {guide.h1}
                                    </Link>
                                </h2>
                                <p className="text-slate-600 text-sm line-clamp-3 mb-6 flex-1">
                                    {guide.metaDescription}
                                </p>
                                <div className="flex items-center justify-between text-sm mt-auto pt-4 border-t border-slate-100">
                                    <span className="text-slate-500">{guide.readTime} de lecture</span>
                                    <span className="font-semibold text-blue-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Lire l'article <ArrowRight className="h-4 w-4" />
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </main>
        </div>
    );
}
