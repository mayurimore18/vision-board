import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(){
 const nav = useNavigate();
 const [user,setUser]=useState({email:"",pass:""});

 const handleSubmit=(e)=>{
  e.preventDefault();
  localStorage.setItem("user",JSON.stringify(user));
  alert("Signup success");
  nav("/");
 }

 return(
 <div className="auth-bg">

  <div className="auth-card">

   <div className="auth-left">
    <h2>Create Account ✨</h2>
    <p>Start building your vision board today.</p>
   </div>

   <form className="auth-right" onSubmit={handleSubmit}>
    <h3 className="mb-4">Signup</h3>

    <input
     className="form-control mb-3"
     placeholder="Email"
     onChange={e=>setUser({...user,email:e.target.value})}
    />

    <input
     type="password"
     className="form-control mb-3"
     placeholder="Password"
     onChange={e=>setUser({...user,pass:e.target.value})}
    />

    <button className="auth-btn w-100 mb-3">
      Create Account
    </button>

    <p className="text-center">
      Already have account? <a href="/">Login</a>
    </p>

   </form>

  </div>

 </div>
)

}

export default Signup;
