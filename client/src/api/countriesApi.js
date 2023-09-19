import axios from 'axios'
import { getEnvVariables } from '../helpers/getEnvVariables';

const { VITE_API_URL } = getEnvVariables()

export const countriesApi = axios.create({
    baseURL: VITE_API_URL
});