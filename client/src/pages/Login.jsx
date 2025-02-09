import axios from "axios";
import { useContext, useState } from "react";
import { ContextComp } from "../context/ContextApi";
import {  toast } from 'react-toastify';
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export let Login = ()=>{
    let {setToken} = useContext(ContextComp)
    let [value,setVal] = useState({
            email:"",
            password:""
        })
      async  function handleSubmit(e){
            e.preventDefault();
          
            try {
                let response = await axios.post(`${process.env.BACKEND_URL}/api/v1/login`,value)
                if(response){
                    // localStorage.setItem("token",response.data.token)
                    toast('🦄 Login Successfull!', {
                        position: "top-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                    setToken(response.data.token)
                    // console.log(response.data.token)
                }
            } catch (error) {
                    toast.error(`${error.response.data.msg}`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                    console.log('isi it',response.data.msg)
                
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
                    <h1 className="text-3xl font-bold">Login</h1>
                    <form className="w-full h-full flex flex-col items-center text-center gap-5" onSubmit={(e)=>handleSubmit(e)}>
                    <input type="email" name="email" id="email" placeholder="Enter Your Email" required autoComplete="off" className="w-full text-center py-5 text-2xl text font-bold border-b-2 outline-none" onChange={(e)=>handleChange(e)}/>
                        <input type="text" name="password" id="password" placeholder="Enter Your password" required autoComplete="off" className="w-full text-center py-5 text-2xl text font-bold border-b-2 outline-none" onChange={(e)=>handleChange(e)}/>
                     
                        <button type="submit" className="w-full text-center text-2xl border-2 border-black rounded-full py-3 bg-blue-400 text-white">Log in</button>
                    </form>
                </div>
            </div>
        )
}