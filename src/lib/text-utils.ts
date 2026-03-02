import { City } from '@/types';
import { Prestation } from './prestations';

/**
 * Returns a deterministic pseudo-random string from options based on city slug.
 */
function getDeterministicOption(options: string[], seed: string): string {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
        const char = seed.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash |= 0;
    }
    return options[Math.abs(hash) % options.length];
}

/**
 * Generates a B2B SEO intro based on city population and prestation type.
 */
export function getCityIntro(city: City, prestation: Prestation): string {
    const pop = city.population || 0;
    const seed = `${city.slug}-${prestation.slug}`;

    if (pop > 50000) {
        const options = [
            `Métropole économique du département ${city.department_name}, ${city.name} concentre un tissu dense d'entreprises, de copropriétés et d'ERP nécessitant des solutions de ${prestation.label.toLowerCase()}.`,
            `Avec son dynamisme industriel et tertiaire, ${city.name} offre un large choix de prestataires qualifiés en ${prestation.shortLabel.toLowerCase()}.`,
            `Au cœur de ${city.name}, les entreprises et gestionnaires d'immeubles bénéficient d'un accès privilégié aux experts en ${prestation.label.toLowerCase()} de la région ${city.region}.`,
            `Pôle économique majeur, ${city.name} dispose d'un écosystème complet de professionnels certifiés pour vos projets de ${prestation.shortLabel.toLowerCase()}.`
        ];
        return getDeterministicOption(options, seed);
    }

    if (pop > 10000) {
        const options = [
            `Ville active du ${city.department_name}, ${city.name} bénéficie d'une excellente couverture par les installateurs de ${prestation.shortLabel.toLowerCase()} de la région.`,
            `À ${city.name}, les professionnels du bâtiment et de l'industrie font confiance à nos partenaires certifiés pour leurs projets de ${prestation.shortLabel.toLowerCase()}.`,
            `Commune dynamique de la région ${city.region}, ${city.name} propose de nombreuses solutions pour l'${prestation.label.toLowerCase()}.`,
            `En plein développement, ${city.name} voit une demande croissante en ${prestation.shortLabel.toLowerCase()} pour ses zones d'activité et ses copropriétés.`
        ];
        return getDeterministicOption(options, seed);
    }

    if (pop > 2000) {
        const options = [
            `Implantée en ${city.region}, la commune de ${city.name} est bien desservie par nos experts en ${prestation.shortLabel.toLowerCase()}.`,
            `Les entreprises et copropriétés de ${city.name} bénéficient d'un accompagnement personnalisé pour leurs projets de ${prestation.label.toLowerCase()}.`,
            `Commune à taille humaine, ${city.name} dispose néanmoins de professionnels qualifiés intervenant rapidement pour l'${prestation.shortLabel.toLowerCase()}.`,
            `À ${city.name}, nos partenaires interviennent sur l'ensemble du territoire pour vos besoins en ${prestation.shortLabel.toLowerCase()}.`
        ];
        return getDeterministicOption(options, seed);
    }

    const options = [
        `Dans le département ${city.department_name}, ${city.name} est couverte par notre réseau d'installateurs qualifiés en ${prestation.shortLabel.toLowerCase()}.`,
        `Les professionnels de ${prestation.shortLabel.toLowerCase()} de la région ${city.region} interviennent régulièrement à ${city.name} et ses environs.`,
        `La commune de ${city.name} fait partie de notre zone d'intervention prioritaire pour l'${prestation.label.toLowerCase()}.`,
        `Pour votre projet à ${city.name}, nos partenaires certifiés du ${city.department_code} se déplacent dans toutes les communes du département.`
    ];
    return getDeterministicOption(options, seed);
}
