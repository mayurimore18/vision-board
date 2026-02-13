import { useState,useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";

function AddVision(){
 const nav=useNavigate();
 const location = useLocation();
 const editData = location.state;

 const [vision,setVision]=useState({
  title:"",
  date:"",
  desc:"",
  image:""
 });

 useEffect(()=>{
   if(editData){
     setVision(editData);
   }
 },[editData]);

const handleImg = (e) => {
 const file = e.target.files[0];
 const reader = new FileReader();

 reader.onloadend = () => {
  setVision({...vision, image: reader.result});
 };

 if(file){
  reader.readAsDataURL(file);
 }
};


 const save=(e)=>{
  e.preventDefault();

  let old=JSON.parse(localStorage.getItem("visions"))||[];

  if(editData){
   old = old.map(v => v.id===editData.id ? vision : v);
  }
  else{
   old.push({...vision,id:Date.now()});
  }

  localStorage.setItem("visions",JSON.stringify(old));
  nav("/dashboard");
 }

 return(
  <div className="center">
   <form className="card p-4 form-maroon" onSubmit={save}>
    <h3 className="mb-3">
      {editData ? "Update Vision" : "Add Vision"}
    </h3>

    <input
     className="form-control mb-2"
     placeholder="Title"
     value={vision.title}
     onChange={e=>setVision({...vision,title:e.target.value})}
    />

    <input
     type="date"
     className="form-control mb-2"
     value={vision.date}
     onChange={e=>setVision({...vision,date:e.target.value})}
    />

    <textarea
     className="form-control mb-2"
     placeholder="Description"
     value={vision.desc}
     onChange={e=>setVision({...vision,desc:e.target.value})}
    />

    <input type="file"
     className="form-control mb-3"
     onChange={handleImg}
    />

    <button className="btn btn-dark">
      {editData ? "Update Vision" : "Save Vision"}
    </button>
   </form>
  </div>
 )
}

export default AddVision;
