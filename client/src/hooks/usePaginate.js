import { useState } from "react";


export const usePaginate = (countries, itemsPerPage = 10) => {
    const [currentPage, setCurrentPage] = useState(0);

    const startIndex = currentPage * itemsPerPage;

    const currentCountries = countries.slice(
    startIndex,
    startIndex + itemsPerPage
    );

    const nextPage = () => {
        if (startIndex + itemsPerPage < countries.length) {
            setCurrentPage(currentPage + 1);
        }
    }

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    return { 
        currentCountries, 
        currentPage,
        startIndex,
        nextPage, 
        prevPage
    };
}