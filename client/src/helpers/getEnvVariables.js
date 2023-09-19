// import { importMeta } from 'vite';


export const getEnvVariables = () => {  

    const {VITE_API_URL} = import.meta.env;
    console.log(VITE_API_URL);
    return {
        VITE_API_URL
    }
    
}