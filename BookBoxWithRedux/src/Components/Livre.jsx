import {useSelector} from 'react-redux';

import LivreCard from "./LivreCard";
const livre=()=>{


 const livre=useSelector(s=>s.livre);
 return(



    <div className="container my-4">
        <div className="row">
         {

            livre.map((l,pos)=><LivreCard key={l.id} livre={l}/>)
         }



        </div>
    </div>

 )




}
export default Livre;