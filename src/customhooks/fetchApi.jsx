import { useEffect, useState } from "react";

export function useFetchApi(url){
    
    const [api,setApi] = useState([])
    useEffect(()=>{
        fetch(url)
        .then(response=>{
            return response.json()
    })
    .then(data=>{
        setApi(data);
    })
    },[url])
    return api;
}