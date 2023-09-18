import axios from 'axios'
import { getEnvVariables } from '../helpers/getEnvVariables';

const { API_URL } = getEnvVariables();

export const countriesApi = axios.create({
    baseURL: API_URL
});