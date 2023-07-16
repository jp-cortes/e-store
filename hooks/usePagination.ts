'use client'
import { useState, useEffect } from "react";
import { getProductsByPage } from "../services";



export function useFetch() {
    const [data, setData] =  useState<Products>([]);
    const [offSet, setOffSet] =  useState<number>(0);
    const [page, setPage] =  useState(1);
    const PRODUCTS_LIMIT = 10;



    async function fetchData() {
        const response = await getProductsByPage(PRODUCTS_LIMIT, offSet);
        setData(response);
    }

    useEffect(() => {
        try {
            fetchData();
         
        } catch (error) {
            console.log(error);
        }
    }, [offSet, PRODUCTS_LIMIT]);

    return {
        data,
        offSet, 
        setOffSet,
        PRODUCTS_LIMIT,
        page, 
        setPage,
    };
};

