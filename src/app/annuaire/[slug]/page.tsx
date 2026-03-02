import { notFound } from "next/navigation";
import { getAllDepartments, getCitiesByDepartment, getDepartmentByCode, getDepartmentsByRegion } from "@/lib/cities";
import Link from "next/link";
import { Metadata } from "next";
import { DepartmentCities } from "@/components/psea/DepartmentCities";
import { Map } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { PRESTATIONS } from "@/lib/prestations";

// ISR: generate on-demand, cache 24h
export const dynamicParams = true;
export const revalidate = 86400;

type Props = {
    params: Promise<{ slug: string }>;
};

// No generateStaticParams — department pages are generated on-demand via ISR.

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const parts = slug.split('-');
    const code = parts[parts.length - 1];
    const dept = getDepartmentByCode(code);

    if (!dept) return {};

    return {
        title: `Professionnels B2B ${dept.name} (${dept.code}) — Ascenseurs, Clim & Bornes | CPMI`,
        description: `Trouvez un installateur certifié d'ascenseur, climatisation tertiaire ou borne de recharge IRVE dans le ${dept.name} (${dept.code}). Devis gratuits.`,
        alternates: {
            canonical: `https://www.cpmi.fr/annuaire/${slug}`,
        },
    };
}

export default async function DepartmentPage({ params }: Props) {
    const { slug } = await params;
    const parts = slug.split('-');
    const code = parts[parts.length - 1];

    const dept = getDepartmentByCode(code);
    if (!dept) notFound();

    const cities = getCitiesByDepartment(code);
    cities.sort((a, b) => a.name.localeCompare(b.name));

    const neighborDepts = getDepartmentsByRegion(dept.region).filter(d => d.code !== dept.code);

    // Default to first prestation for links
    const defaultPrestation = PRESTATIONS[0];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Dept */}
            <section className="bg-slate-950 text-white relative pb-32 pt-16 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.1),transparent_50%)]"></div>

                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="mb-8">
                        <Breadcrumbs
                            items={[
                                { label: "Annuaire", href: "/annuaire" },
                                { label: `${dept.name} (${dept.code})` },
                            ]}
                        />
                    </div>

                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-md border border-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                            Département {dept.code}
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
                            Professionnels B2B <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">dans le {dept.name}</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
                            Trouvez un installateur certifié dans la région {dept.region}.
                            Ascenseurs, climatisation tertiaire et bornes de recharge pour votre entreprise ou copropriété.
                        </p>
                    </div>
                </div>

                {/* Decorative bottom border matching hub pages */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
            </section>

            {/* Cities Section */}
            <section className="pb-20 bg-slate-50 min-h-[500px]">
                <div className="container mx-auto px-4">
                    <DepartmentCities
                        departmentName={dept.name}
                        departmentCode={dept.code}
                        cities={cities}
                        prestationSlug={defaultPrestation.slug}
                    />

                    {/* Other prestations links */}
                    <div className="mt-16 bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-10">
                        <h3 className="text-2xl font-extrabold text-slate-900 mb-8 tracking-tight">Nos services dans le {dept.name}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {PRESTATIONS.map(p => (
                                <Link key={p.slug} href={`/${p.slug}`} className="block group">
                                    <div className="h-full p-6 bg-slate-50 rounded-2xl border border-slate-100 group-hover:border-blue-300 group-hover:shadow-md transition-all duration-300 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                            {/* Stylized background icon impression */}
                                            <Map className="w-24 h-24" />
                                        </div>
                                        <h4 className="font-bold text-slate-900 mb-2 text-lg group-hover:text-blue-600 transition-colors relative z-10">{p.shortLabel}</h4>
                                        <p className="text-sm text-slate-600 leading-relaxed relative z-10">{p.label}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Neighbor Departments */}
                    {neighborDepts.length > 0 && (
                        <div className="mt-16 pt-16 border-t border-slate-200">
                            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                                <Map className="h-6 w-6 text-blue-500" />
                                Autres départements en {dept.region}
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {neighborDepts.map((d) => (
                                    <Link
                                        key={d.code}
                                        href={`/annuaire/${d.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}-${d.code}`}
                                        className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all group"
                                    >
                                        <span className="font-medium text-slate-700 group-hover:text-blue-700">{d.name}</span>
                                        <span className="text-sm text-slate-400 bg-slate-50 px-2 py-1 rounded group-hover:bg-blue-50 group-hover:text-blue-600">{d.code}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
