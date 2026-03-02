// ─── Prestation definitions for the 3 B2B niches ─────────────────────

export interface Prestation {
    slug: string;
    label: string;
    shortLabel: string;
    metaTitleTemplate: string;
    metaDescTemplate: string;
    h1Template: string;
    /** Keywords used for internal content generation */
    keywords: string[];
}

export const PRESTATIONS: readonly Prestation[] = [
    {
        slug: 'installation-ascenseur',
        label: 'Installation Ascenseur & Monte-charge',
        shortLabel: 'Ascenseur ERP',
        metaTitleTemplate:
            'Installation Ascenseur ERP à {ville} ({cp}) | Devis Gratuit',
        metaDescTemplate:
            "Experts en installation d'ascenseur et monte-charge ERP à {ville} ({dept}). Devis rapide, conformité aux normes PMR, entreprises et copropriétés. ☎ Contactez-nous.",
        h1Template: 'Installation Ascenseur & Monte-charge à {ville}',
        keywords: [
            'ascenseur',
            'monte-charge',
            'ERP',
            'PMR',
            'copropriété',
            'mise en conformité',
            'maintenance ascenseur',
        ],
    },
    {
        slug: 'climatisation-entreprise',
        label: 'Climatisation Tertiaire & Industrielle',
        shortLabel: 'Climatisation Pro',
        metaTitleTemplate:
            'Climatisation Entreprise à {ville} ({cp}) | Devis Pro Gratuit',
        metaDescTemplate:
            'Climatisation tertiaire et industrielle à {ville} ({dept}). Solutions sur-mesure pour bureaux, commerces et ERP. Installation, entretien, dépannage. ☎ Devis gratuit.',
        h1Template: 'Climatisation Tertiaire & Industrielle à {ville}',
        keywords: [
            'climatisation',
            'CVC',
            'tertiaire',
            'industriel',
            'pompe à chaleur',
            'gainable',
            'VRV',
            'DRV',
        ],
    },
    {
        slug: 'borne-de-recharge-pro',
        label: 'Borne de Recharge pour Flotte Pro',
        shortLabel: 'Borne de Recharge',
        metaTitleTemplate:
            'Borne de Recharge Entreprise à {ville} ({cp}) | Installation IRVE',
        metaDescTemplate:
            "Installation de bornes de recharge pour flotte d'entreprise à {ville} ({dept}). Installateurs IRVE qualifiés, copropriétés et parkings professionnels. ☎ Devis gratuit.",
        h1Template: 'Borne de Recharge Pro à {ville}',
        keywords: [
            'borne de recharge',
            'IRVE',
            'véhicule électrique',
            'flotte entreprise',
            'copropriété',
            'wallbox',
            'superchargeur',
        ],
    },
] as const;

// ─── Helpers ─────────────────────────────────────────────────────────

const prestationBySlug = new Map<string, Prestation>();
for (const p of PRESTATIONS) {
    prestationBySlug.set(p.slug, p);
}

export function getPrestationBySlug(slug: string): Prestation | undefined {
    return prestationBySlug.get(slug);
}

export function getAllPrestationSlugs(): string[] {
    return PRESTATIONS.map((p) => p.slug);
}

/** Fill a template string with city/department data */
export function fillTemplate(
    template: string,
    vars: { ville: string; cp: string; dept: string }
): string {
    return template
        .replace(/\{ville\}/g, vars.ville)
        .replace(/\{cp\}/g, vars.cp)
        .replace(/\{dept\}/g, vars.dept);
}
