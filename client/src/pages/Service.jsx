import { useContext } from "react"
import { useFetch } from "../hooks/useFetch"
import { ContextComp } from "../context/ContextApi"

export let Service = ()=>{
    const {backendUrl} = useContext(ContextComp)
    let response = useFetch(`${backendUrl}/about`)
   let data = response.data
   if(!data){
    return(
        <>
            <h1>Loading...</h1>
        </>
    )
   }else{
       return(
           <>
               {data.map((cur,ind)=>{
                   return(
                       <li key={ind} className="list-none border m-5
                       p-3">
                       <h1>{cur.category}</h1>
                       <h4>{cur.description}</h4>
                       <h1>{cur.instructor}</h1>
                       <h3>{cur.price}</h3>
                       </li>
                   )
               })}
           </>
       )

   }
   
   }