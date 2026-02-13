import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";

function Login(){
 const nav=useNavigate();
 const [data,setData]=useState({email:"",pass:""});

 const login=(e)=>{
  e.preventDefault();
  const saved=JSON.parse(localStorage.getItem("user"));

  if(saved && saved.email===data.email && saved.pass===data.pass){
   nav("/dashboard");
  } else alert("Invalid login");
 }

return(
 <div className="auth-bg">

  <div className="auth-card">

   <div className="auth-left">
    <h2>Welcome Back!!</h2>
    <p>Login to manage your goals and dreams visually.</p>
   </div>

   <form className="auth-right" onSubmit={login}>
    <h3 className="mb-4">Login</h3>

    <input
     className="form-control mb-3"
     placeholder="Email"
     onChange={e=>setData({...data,email:e.target.value})}
    />

    <input
     type="password"
     className="form-control mb-3"
     placeholder="Password"
     onChange={e=>setData({...data,pass:e.target.value})}
    />

    <button className="auth-btn w-100 mb-3">
      Login
    </button>

    <p className="text-center">
      No account? <Link to="/signup">Signup</Link>
    </p>

   </form>

  </div>

 </div>
)

}

export default Login;
