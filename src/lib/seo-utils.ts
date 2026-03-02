import { City } from "@/types";
import fs from "fs";
import path from "path";
import departmentsData from "@/lib/db/departments-infos.json";
import { Prestation, fillTemplate, getPrestationBySlug } from "./prestations";

let _citiesCache: City[] | null = null;
function getCities(): City[] {
    if (!_citiesCache) {
        const filePath = path.join(process.cwd(), 'src/lib/db/cities.json');
        _citiesCache = JSON.parse(fs.readFileSync(filePath, 'utf8')) as City[];
    }
    return _citiesCache;
}

export function getCityFromSlug(slug: string): City | undefined {
    const city = getCities().find(c => c.slug === slug);
    if (!city) return undefined;

    const deptInfo = departmentsData.find(d => d.code === city.department_code);
    return {
        ...city,
        department_info: deptInfo
    };
}

export function getAllCitySlugs(): string[] {
    return getCities().map(c => c.slug);
}

export function getAllCities(): City[] {
    return getCities();
}

export function generateCityMetadata(city: City, prestation: Prestation) {
    const vars = { ville: city.name, cp: city.zip, dept: city.department_name };
    return {
        title: fillTemplate(prestation.metaTitleTemplate, vars),
        description: fillTemplate(prestation.metaDescTemplate, vars),
        alternates: {
            canonical: `https://www.cpmi.fr/${prestation.slug}/${city.slug}`,
        },
    };
}

export function getAllDepartmentCodes(): string[] {
    return departmentsData.map(d => d.code);
}
