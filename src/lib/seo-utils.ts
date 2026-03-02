import { City } from "@/types";
import citiesData from "@/lib/db/cities.json";
import departmentsData from "@/lib/db/departments-infos.json";
import { Prestation, fillTemplate, getPrestationBySlug } from "./prestations";

const cities = citiesData as City[];

export function getCityFromSlug(slug: string): City | undefined {
    const city = cities.find(c => c.slug === slug);
    if (!city) return undefined;

    const deptInfo = departmentsData.find(d => d.code === city.department_code);
    return {
        ...city,
        department_info: deptInfo
    };
}

export function getAllCitySlugs(): string[] {
    return cities.map(c => c.slug);
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
