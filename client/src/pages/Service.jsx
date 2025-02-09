import { useFetch } from "../hooks/useFetch"

export let Service = ()=>{
    let response = useFetch(`${process.env.BACKEND_URL}/about`)
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