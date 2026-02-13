import { useNavigate } from "react-router-dom";

function VisionCard({vision,deleteVision}){
 const nav = useNavigate();

 return(
  <div className="col-lg-4 col-md-6 mb-4">
   <div className="card shadow">

    <img src={vision.image} className="card-img-top img"/>

    <div className="card-body">
     <h5>{vision.title}</h5>
     <p className="text-muted">{vision.date}</p>
     <p>{vision.desc}</p>

     <div className="d-flex gap-2">
       <button
        className="btn btn-danger btn-sm"
        onClick={()=>deleteVision(vision.id)}>
        Delete
       </button>

       <button
        className="btn btn-dark btn-sm"
        onClick={()=>nav("/add",{state:vision})}>
        Edit
       </button>
     </div>

    </div>

   </div>
  </div>
 )
}

export default VisionCard;
