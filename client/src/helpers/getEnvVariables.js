export const getEnvVariables = () => {  

    const {API_URL} =  import.meta.env;

    return {
        API_URL
    }
    
}