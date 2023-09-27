import { countriesApi } from "../api/countriesApi";

export const getCountriesById = async (id) => {
    try {
        const { data } = await countriesApi.get(`/countries/${id}`);
        return data;
    } catch (error) {  
        alert("Error al obtener los datos");
        throw new Error(error.message);
        
    }
}