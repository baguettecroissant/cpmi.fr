import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GUIDES, getGuideBySlug } from '@/data/guides';
import { ViteUnDevisWidget } from '@/components/widgets/ViteUnDevisWidget';
import { ArrowLeft, Clock, FolderOpen } from 'lucide-react';
import Link from 'next/link';

interface Props {
    params: Promise<{ slug: string }>;
}

// ISR config
export const revalidate = 86400; // 24 hours

export function generateStaticParams() {
    return GUIDES.map((g) => ({
        slug: g.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const guide = getGuideBySlug(resolvedParams.slug);
    if (!guide) return {};

    return {
        title: guide.title,
        description: guide.metaDescription,
        openGraph: {
            title: guide.title,
            description: guide.metaDescription,
            type: 'article',
        },
    };
}

export default async function GuidePage({ params }: Props) {
    const resolvedParams = await params;
    const guide = getGuideBySlug(resolvedParams.slug);

    if (!guide) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Breadcrumb Layer */}
            <div className="bg-slate-900 border-b border-slate-800">
                <div className="container mx-auto px-4 py-4 max-w-6xl">
                    <nav className="flex items-center text-sm font-medium text-slate-400">
                        <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
                        <span className="mx-2">/</span>
                        <Link href="/guides" className="hover:text-white transition-colors">Guides Pro</Link>
                        <span className="mx-2">/</span>
                        <span className="text-slate-200 truncate">{guide.h1}</span>
                    </nav>
                </div>
            </div>

            <main className="container mx-auto px-4 py-8 lg:py-16 max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                    {/* Left Content Column (8/12) */}
                    <div className="w-full lg:w-2/3">
                        <Link href="/guides" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 mb-8 transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Retour aux guides
                        </Link>

                        <article className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                            {/* Hero Image */}
                            <div className="aspect-[21/9] w-full relative bg-slate-100">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={guide.imagePath ? `${guide.imagePath}?v=1` : 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200'}
                                    alt={guide.h1}
                                    className="object-cover w-full h-full"
                                />
                            </div>

                            <div className="p-8 md:p-12">
                                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-8 border-b border-slate-100 pb-6">
                                    <span className="inline-flex items-center gap-1.5 font-medium uppercase tracking-wider text-slate-700 bg-slate-100 px-3 py-1 rounded-full">
                                        <FolderOpen className="w-4 h-4" /> {guide.category}
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <Clock className="w-4 h-4" /> {guide.readTime}
                                    </span>
                                    <span className="ml-auto">
                                        Mise à jour : Février 2026
                                    </span>
                                </div>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-10 leading-tight">
                                    {guide.h1}
                                </h1>

                                <div className="prose prose-slate prose-lg max-w-none 
                                    prose-headings:text-slate-900 prose-headings:font-bold 
                                    prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-2 prose-h2:border-b prose-h2:border-slate-100
                                    prose-h3:text-2xl
                                    prose-p:text-slate-600 prose-p:leading-relaxed
                                    prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                                    prose-ul:text-slate-600 prose-li:marker:text-blue-500
                                    prose-strong:text-slate-900"
                                >
                                    {guide.content}
                                </div>
                            </div>
                        </article>
                    </div>

                    {/* Right Sidebar CTA Column (4/12) */}
                    <aside className="w-full lg:w-1/3">
                        <div className="sticky top-8 space-y-8">

                            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-xl">
                                <h3 className="text-2xl font-bold mb-4">Un projet B2B en tête ?</h3>
                                <p className="text-blue-100 mb-6">Ne laissez pas la réglementation freiner votre développement. Demandez un accompagnement expert.</p>
                                <ul className="space-y-3 text-sm text-blue-50 mb-8">
                                    <li className="flex items-center gap-2">✓ Devis 100% gratuit</li>
                                    <li className="flex items-center gap-2">✓ Artisans certifiés & RGE</li>
                                    <li className="flex items-center gap-2">✓ Démarches facilitées</li>
                                </ul>
                                <Link
                                    href="/devis"
                                    className="block w-full text-center bg-white text-blue-700 font-bold py-3 px-4 rounded-xl hover:bg-slate-50 transition-colors shadow-md"
                                >
                                    Obtenir mes devis
                                </Link>
                            </div>

                            {/* Widget contextualisé à la catégorie du guide */}
                            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200">
                                <h4 className="font-bold text-slate-900 mb-4 text-center">Trouvez le bon pro</h4>
                                <ViteUnDevisWidget keyword={`Devis professionnel ${guide.category}`} />
                            </div>

                        </div>
                    </aside>

                </div>
            </main>
        </div>
    );
}
