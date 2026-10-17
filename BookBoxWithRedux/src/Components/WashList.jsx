import {useSelector} from "react-redux";
import LivreCardV2 from "./LivreCardV2";


const WashList=()=>{

const livre=useSelector(s=>s.livre);
return(

 <div className="container my-4">
        <div className="row w-50 mx-auto p-3">
         {

            livre.filter(l=>l.inWatchlist).map((l,pos)=><LivreCardV2 key={l.id} livre={l}/>)
         }



        </div>
    </div>



)



}
export default WashList;