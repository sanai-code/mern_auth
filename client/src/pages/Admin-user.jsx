import {  useContext, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { ContextComp } from "../context/ContextApi"
import axios from "axios";
import { Link } from "react-router-dom";


export let AdminUser = () => {
  let [response, setResponse] = useState();
  let [loading, setLoading] = useState(true);
  let [refetch,setRefetch] = useState(false)
  let {lstoken,backendUrl} = useContext(ContextComp)
  try {

   async function getData(){
    let res = await axios.post(`${backendUrl}/api/v1/admin`,{},{headers:{"token":lstoken}})
        setResponse(res.data.users);
        setLoading(false);
        
    }

    useEffect(() => {
      getData();
    }, []);

    //! function to delete data
   async function handleClick(a){
        let del = await axios.post(`${backendUrl}/api/v1/admin/delete`,{_id:a})
        getData()
    }
    if (loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <table >
            <thead>
              <tr>
                <th>_id</th>
                <th>username</th>
                <th>Email</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {response.map((cur, index) => (
                <tr key={index}>
                  <td>{cur._id}</td>
                  <td>{cur.username}</td>
                  <td>{cur.email}</td>
                  <td><Link to={`/admin/user/${cur._id}/edit`}>Edit</Link></td>
                  <td onClick={()=>handleClick(cur)}>Delete</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  } catch (error) {
    console.log("err", error);
  }
};
