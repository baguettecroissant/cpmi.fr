import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Provide absolute resolution for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// We define minimal required types for our script since we are not compiling this strictly for browser
interface City {
    name: string;
    zip: string;
    population: number;
    department_name: string;
    department_code: string;
    region: string;
    slug: string;
}

interface Prestation {
    slug: string;
    label: string;
    shortLabel: string;
}

const PRESTATIONS: Prestation[] = [
    { slug: 'installation-ascenseur', label: 'Installation Ascenseur et Monte-charge', shortLabel: 'Ascenseur' },
    { slug: 'climatisation-entreprise', label: 'Climatisation Tertiaire et Industrielle', shortLabel: 'Climatisation' },
    { slug: 'borne-de-recharge-pro', label: 'Borne de Recharge Entreprise et Copropriété', shortLabel: 'Borne IRVE' }
];

// Load cities data
const citiesPath = path.join(__dirname, '../src/lib/db/cities.json');
const citiesRaw = fs.readFileSync(citiesPath, 'utf8');
const allCities: City[] = JSON.parse(citiesRaw);

// Sort by population and get the next 1000 largest cities (excluding the first 50 already generated)
const targetCities = [...allCities]
    .sort((a, b) => (b.population || 0) - (a.population || 0))
    .slice(50, 1050);

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
    console.error("❌ Erreur : Veuillez définir la variable d'environnement GEMINI_API_KEY.");
    console.error("Exemple: GEMINI_API_KEY=votre_cle npx tsx scripts/generate-city-content.ts");
    process.exit(1);
}

// Function to call Gemini 2.0 Flash Lite (Cost-optimized & Shorter output)
async function generateUniqueContent(city: City, prestation: Prestation) {
    const prompt = `
Tu es référenceur SEO pour "CPMI.fr" (B2B local). Rédige un contenu ultra-court, ciblé et 100% unique pour : "${prestation.label}" à ${city.name} (${city.zip}, ${city.region}).

Sois EXTRÊMEMENT CONCIS pour limiter les coûts d'API (va à l'essentiel, pas de blabla).

Format STRICT JSON uniquement :
{
  "introText": "1 phrase d'intro (max 25 mots) sur l'importance locale.",
  "localContext": {
    "title": "Titre très court",
    "content": "2 phrases (max 40 mots) sur les aides ou le climat régional."
  },
  "expertAdvice": "1 phrase d'avis expert (max 20 mots).",
  "advantages": [
    "Atout 1 local (10 mots)",
    "Atout 2 (10 mots)",
    "Atout 3 (10 mots)"
  ],
  "pricingContext": "1 phrase sur les prix pros du ${city.department_code} (max 20 mots).",
  "faq": [
    {
      "question": "Question locale courte ?",
      "answer": "Réponse B2B (max 20 mots)."
    },
    {
      "question": "Délai à ${city.name} ?",
      "answer": "Réponse très brève."
    },
    {
      "question": "SAV ou norme locale ?",
      "answer": "Réponse max 20 mots."
    }
  ]
}
`;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
                temperature: 0.7,
                responseMimeType: "application/json",
            }
        })
    });

    if (!response.ok) {
        throw new Error(`Erreur API Gemini: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const rawContent = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!rawContent) {
        throw new Error("Réponse vide de Gemini");
    }

    try {
        return JSON.parse(rawContent);
    } catch (e) {
        console.error("Failed to parse JSON:", rawContent);
        throw e;
    }
}

// Batch processing helper
async function processBatch<T>(items: T[], batchSize: number, processor: (item: T) => Promise<void>) {
    for (let i = 0; i < items.length; i += batchSize) {
        const batch = items.slice(i, i + batchSize);
        await Promise.all(batch.map(processor));
    }
}

async function main() {
    console.log(`🚀 Génération ciblée des ${targetCities.length} prochaines plus grandes villes (Rang 51 à 1050)...`);

    const outputDirRoot = path.join(__dirname, '../src/data/generated');
    if (!fs.existsSync(outputDirRoot)) {
        fs.mkdirSync(outputDirRoot, { recursive: true });
    }

    let successCount = 0;
    let errorCount = 0;

    for (const prestation of PRESTATIONS) {
        const prestDir = path.join(outputDirRoot, prestation.slug);
        if (!fs.existsSync(prestDir)) {
            fs.mkdirSync(prestDir, { recursive: true });
        }

        console.log(`\n📦 Traitement de la prestation : ${prestation.label}`);

        // Process 10 cities concurrently (Safe for Pay-as-you-go)
        await processBatch(targetCities, 10, async (city) => {
            const fileName = `${city.slug}.json`;
            const filePath = path.join(prestDir, fileName);

            if (fs.existsSync(filePath)) {
                return;
            }

            try {
                const uniqueData = await generateUniqueContent(city, prestation);
                fs.writeFileSync(filePath, JSON.stringify(uniqueData, null, 2), 'utf8');
                console.log(`✅ [Succes]  ${city.name} sauvegardée.`);
                successCount++;
            } catch (err: any) {
                console.error(`❌ [Erreur]  ${city.name}:`, err.message);
                errorCount++;
            }
        });
    }

    console.log(`\n🎉 Génération terminée ! Succès: ${successCount}, Erreurs: ${errorCount}`);
}

main().catch(console.error);
