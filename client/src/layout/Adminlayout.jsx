import { Navigate, Outlet } from "react-router-dom"
import { AdminSidebar } from "../components/adminnav"
import { useContext, useEffect, useState } from "react";
import { ContextComp } from "../context/ContextApi";


export let Adminlayout = ()=>{
    let { getInfo } = useContext(ContextComp);
    let [isAdmin,setIsAdmin] = useState()
    let [loading,setIsloading] = useState(true)
    try {
      async function getData(){
        // getInfo().then((res) => setName(res.data.msg.isAdmin));
        let val = await getInfo()
        setIsAdmin(val.data.msg.isAdmin)
        setIsloading(false)
    }
     useEffect(() => {
        getData()
      }, []);
      if(loading){
       return <div>
            Loading...
        </div>
      }else if(isAdmin){
        return(
              <main className="flex">
              <AdminSidebar/>
              <Outlet/>
              </main>
      
          )
      }else{
       return <Navigate to="/"/>
      }
    } catch (error) {
      console.log(error)
    }
    
}