import { useEffect, useState } from "react"
import { fetchData } from "../helpers/fetchData"

export const useFetchData=({url})=>{
    const [data, setData] = useState([])

    const [load, isLoading] = useState(true)

    const getData=async()=>{
        const {data,loading}=await fetchData(url)
        setData(data)
        isLoading(loading)
    }

    useEffect(()=>{
        getData()
    },[url])

    return{
        data,
        load
    }
}