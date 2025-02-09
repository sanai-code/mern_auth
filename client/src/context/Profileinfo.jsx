import { useContext, useEffect, useState } from "react";
import { ContextComp } from "./ContextApi";

export let ProfileInfo = () => {
  let { getInfo } = useContext(ContextComp);
  console.log('this is getinfo',getInfo)
  let [name, setName] = useState("");
  useEffect(() => {
    getInfo().then((res) => setName(res.data.msg.username));
  }, []);
  return <div className="p-6"> 
  <h1 className="text-4xl">
   Hi {name}
    </h1>
    </div>;
};
export const Me = ()=>{
  let { getInfo } = useContext(ContextComp);
  console.log('this is getinfo',getInfo)
  let [name, setName] = useState("");
  useEffect(() => {
    getInfo().then((res) => setName(res.data.msg.username.toUpperCase()));
  }, []);
  return <div className="w-8 h-8 bg-amber-800 rounded-full flex items-center justify-center">
    <h1 className="font-semibold text-sky-100 text-center">{name[0]}</h1>
  </div>
}