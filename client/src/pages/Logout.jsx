import { useContext, useEffect } from "react"
import { ContextComp } from "../context/ContextApi"
import { Navigate } from "react-router-dom"




export let Logout = ()=>{
    let {removeToken} = useContext(ContextComp)
    useEffect(()=>{
        removeToken()
    },[])
    
    return <Navigate to={"/login"}/>
}