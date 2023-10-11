import dataHarcodeada from "./data"
//Esta parte de la data fue pedida presatada de axelcymerman debido a que no se comprendia el uso de la api
const Api = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=3762930b913b46e2a8d5de5d687bfcd0'

export default async function useFetch(hardcodeado: Boolean, id: number) {
    var result = null
    if (hardcodeado) result = dataHarcodeada  
    try {
        const response = await fetch(Api)
        if (!response.ok) throw new Error('Error en la llamada a la API')
        result = await response.json() as Promise<APIResponse>
    } catch (error) {
        console.error(error)
    }
    if (id) return result.results.find((plato: Result) => plato.id === id)
    return result.results
}

export interface APIResponse {
    results:      Result[];
    offset:       number;
    number:       number;
    totalResults: number;
}

export interface Result {
    id:        number;
    title:     string;
    image:     string;
    imageType: ImageType;
}

export enum ImageType {
    Jpg = "jpg",
}
