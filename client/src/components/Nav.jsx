import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextComp } from "../context/ContextApi";
import { Me } from "../context/Profileinfo";

export let Navbar = () => {
  let {isToken} = useContext(ContextComp)
  console.log('nav',isToken)
  return (
    <div className="w-full h-20 bg-amber-400">
      <div id="wrapper" className="flex items-center justify-around w-full h-full">
        {/* <h1>
            Logo
        </h1> */}
        <div className="flex items-center justify-center gap-3">
       <h4><Link to="/"> Home</Link></h4>
       <h4><Link to="/about"> About</Link></h4>
       <h4><Link to="/service"> Service</Link></h4>
       <h4><Link to="/contact"> Contact</Link></h4>

      {isToken?
      <div className="flex items-center gap-5">
        <h4><Link to="/logout"> Logout</Link></h4>
         <h4><Link to="/me"><Me/></Link></h4></div>
      : <div className="flex gap-5"><h4><Link to="/signup"> Sign up</Link></h4>
      <h4><Link to="/login"> Login</Link></h4>
      </div> 
       }
        
        </div>
      </div>
    </div>
  );
};
