import { useNavigate } from "react-router-dom";
import VisionCard from "../components/VisionCard";
import { useState,useEffect } from "react";

function Dashboard(){
 const nav=useNavigate();
 const [visions,setVisions]=useState([]);

 useEffect(()=>{
  const saved=JSON.parse(localStorage.getItem("visions"))||[];
  setVisions(saved);
 },[]);

 const deleteVision=(id)=>{
  const updated=visions.filter(v=>v.id!==id);
  setVisions(updated);
  localStorage.setItem("visions",JSON.stringify(updated));
 }

 return(
  <div className="container py-4">

   <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4">

  <div>
    <h2 className="mb-1">Vision Board</h2>
    <p className="tagline mb-0">Your visions deserve a place to live.</p>
  </div>

  <button
   className="btn btn-dark px-4 fw-bold mt-3 mt-md-0"
   onClick={()=>nav("/add")}
  >
   + Add Vision
  </button>

</div>


   <div className="row g-4">
    {visions.map(v=>(
     <VisionCard key={v.id} vision={v} deleteVision={deleteVision}/>
    ))}
   </div>

  </div>
 )
}

export default Dashboard;
