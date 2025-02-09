import axios from "axios";
import { createContext, useState } from "react";
export let ContextComp = createContext();
export let ProviderComp = ({ children }) => {
    let backendUrl = import.meta.env.VITE_BACKEND_URL
    let [lstoken,setLstoken] = useState(localStorage.getItem("token"))
    let isToken = !!lstoken
    let removeToken = (token)=>{
        setLstoken("")
        return localStorage.removeItem("token")
    }
    const setToken = (token)=>{
        localStorage.setItem("token",token)
        return setLstoken(localStorage.getItem('token'))
    }
    const getInfo = async()=>{
        let response = await axios.get(`${backendUrl}/api/v1/me`,{headers:{"token":lstoken}})
        let username =  response.data.msg.username
        return response
    }
     function getToken(){
        let token = localStorage.getItem("token")
        return token
    }
  return (<ContextComp.Provider value={{removeToken,isToken,setToken,getInfo,lstoken,getToken,backendUrl}}>
    {children}
    </ContextComp.Provider>)
};
