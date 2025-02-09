import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { ContextComp } from "../context/ContextApi"


export const useFetch = (url)=>{
    let {lstoken} = useContext(ContextComp)
    let [response,setResponse] = useState("")
   async function getData(){
        let res = await axios.post(url,{},{headers:{"token":lstoken}})
        setResponse(res.data)
    }
    useEffect(()=>{
        getData();
    },[url])
    return response
}