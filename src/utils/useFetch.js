import axios from "axios"
import { useEffect, useState } from "react"

export const useFetch=(url)=>{
    const [data,setData]=useState([])
    const [loader,setLoader]=useState(true)
    const [error,setError]=useState(false)

    useEffect(()=>{
        (async()=>{
            try {
                const response =await axios.get(url)
                response ? setData(response.data) : setData([])
            } catch (error) {
                setError(true)
            }finally{
                setLoader(false)                
            }
        })()
    },[])
    return {data,loader,error}
}