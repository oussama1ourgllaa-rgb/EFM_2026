
import LivreCardV3 from "./LivreCardV3";
import { useSelector } from "react-redux";


const LikedList=()=>{

const livre=useSelector(s=>s.livre);
return(
 <div className="container my-4">
        <div className="row w-50 mx-auto p-3">
         {

             livre.filter(l=>l.liked).map((l,pos)=><LivreCardV3 key={l.id} livre={l}/>)
         }



        </div>
    </div>



)



}
export default LikedList;