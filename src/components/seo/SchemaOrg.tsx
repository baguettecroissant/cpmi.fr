import { City } from "@/types";
import { Prestation } from "@/lib/prestations";

interface SchemaOrgProps {
    city: City;
    prestation: Prestation;
}

export function SchemaOrg({ city, prestation }: SchemaOrgProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `${prestation.label} à ${city.name}`,
        "description": `Service de ${prestation.label.toLowerCase()} à ${city.name} (${city.zip}). Devis gratuits de professionnels certifiés.`,
        "areaServed": {
            "@type": "City",
            "name": city.name,
            "address": {
                "@type": "PostalAddress",
                "postalCode": city.zip,
                "addressCountry": "FR"
            }
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": city.coordinates.lat,
            "longitude": city.coordinates.lng
        },
        "url": `https://www.cpmi.fr/${prestation.slug}/${city.slug}`,
        "provider": {
            "@type": "Organization",
            "name": "CPMI.fr",
            "url": "https://www.cpmi.fr"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
