import { useContext, useState } from "react";
import axios from "axios"
import { ContextComp } from "../context/ContextApi";
export let Signup = ()=>{
    let {setToken} = useContext(ContextComp)
    let [value,setVal] = useState({
            username:"",
            email:"",
            password:""
        })
        async function handleSubmit(e){
            e.preventDefault();
            let response = await axios.post(`${process.env.BACKEND_URL}/api/v1/register`,value)
            console.log('this is response data',response.data.code)
            if(response.data.token){
                setToken(response.data.token)
            }else{
                alert(response.data.msg)
            }
        }
        function handleChange(e){
            let name = e.target.name
            let targetVal = e.target.value
            setVal({...value,[name]:targetVal})
    
        }
        return(
            <div className="w-full h-dvh">
                <div id="wrapper" className="h-full w-full p-5 bg-amber-200 grid place-items-center">
                <h1 className="font-bold text-3xl">Sign Up</h1>
                    <form className="w-full h-full flex flex-col items-center text-center gap-5" onSubmit={(e)=>handleSubmit(e)}>
                        <input type="text" name="username" id="username" placeholder="Enter Your Name" required autoComplete="off" className="w-full text-center py-5 text-2xl text font-bold border-b-2 outline-none" onChange={(e)=>handleChange(e)}/>
                        <input type="email" name="email" id="email" placeholder="Enter Your Email" required autoComplete="off" className="w-full text-center py-5 text-2xl text font-bold border-b-2 outline-none" onChange={(e)=>handleChange(e)}/>
                        <input type="password" name="password" id="password" placeholder="Enter Your Password" required autoComplete="off" className="w-full text-center py-5 text-2xl text font-bold border-b-2 outline-none" onChange={(e)=>handleChange(e)}/>
                        <button type="submit" className="w-full text-center text-2xl border-2 border-black rounded-full py-3 bg-blue-400 text-white">sign up</button>
                    </form>
                </div>
            </div>
        )
}