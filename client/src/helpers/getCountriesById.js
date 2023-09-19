import { countriesApi } from "../api/countriesAPI";

export const getCountriesById = async (id) => {
    try {
        const { data } = await countriesApi.get(`/${id}`);
        return data;
    } catch (error) {  
        alert("Error al obtener los datos");
        throw new Error(error.message);
        
    }
}