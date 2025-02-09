import axios from "axios";
import { createContext, useState } from "react";

export let ContextComp = createContext();
export let ProviderComp = ({ children }) => {
    let [lstoken,setLstoken] = useState(localStorage.getItem("token"))
    let isToken = !!lstoken
    console.log(isToken)
    let removeToken = (token)=>{
        setLstoken("")
        return localStorage.removeItem("token")
    }
    const setToken = (token)=>{
        console.log('inside settoken',token)
        localStorage.setItem("token",token)
        return setLstoken(localStorage.getItem('token'))
    }
    const getInfo = async()=>{
        console.log(lstoken)
        let response = await axios.get(`${process.env.BACKEND_URL}/api/v1/me`,{headers:{"token":lstoken}})
        let username =  response.data.msg.username
        return response
    }
     function getToken(){
        let token = localStorage.getItem("token")
        return token
    }
  return (<ContextComp.Provider value={{removeToken,isToken,setToken,getInfo,lstoken,getToken}}>
    {children}
    </ContextComp.Provider>)
};
