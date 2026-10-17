import {useDispatch} from "react-redux";

import { FaHeart,FaRegHeart,FaTimes ,FaPlus} from "react-icons/fa";

const LivreCard=({livre})=>{
   const dispatch=useDispatch();

    return(
  <div className="col-md-4">
      <div className="card h-100">
        <img
          src={livre.poster}
          className="card-img-top"
          alt={livre.title}
          
        />

        <div className="card-body">
          <h5 className="card-title">{livre.title}</h5>

          <p className="card-text">
            <strong>Identifiant :</strong> {livre.id}
            <br />
            <strong>Année :</strong> {livre.year}
            <br />
            <strong>Genre :</strong> {livre.genre}
          </p>

          <p>
            <button onClick={()=>dispatch({type:"TOGGLE_LIKE",payload:livre.id})} className="btn btn-sm">{livre.liked?<FaHeart style={{color:"red"}}/>:<FaRegHeart/>}</button>
            <button onClick={()=>dispatch({type:livre.inWatchlist?"REMOVE_FROM_WATCHLIST":"ADD_TO_WATCHLIST",payload:livre.id})} className="btn btn-sm">{livre.inWatchlist?<FaTimes/>:<FaPlus/>}</button>
          </p>
        </div>
      </div>
    </div>


    )

}
export default LivreCard;