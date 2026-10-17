import { useContext } from "react";
import { MovieContext } from "../Components/MovieContext";

const MovieCard=({movie})=>{
   const {dispatch}=useContext(MovieContext);

        return (
            <div className="col-md-4">
               <div className="card h-100">
                 <img src={movie.image} className="card-img-top" alt={movie.title} style={{objectFit:"contain",height:"220px"}}/>
                   <div className="card-body d-flex flex-column">
                       <h4 className="card-title">{movie.title}</h4>
                       <p className="d-flex justify-content-between">
                        <span className="badge bg-success">{movie.genre}</span>
                        <span className="badge bg-info">{movie.year}</span>
                       </p>
                        <button type="button" onClick={()=>dispatch({type:"ADD_TO_WATCHLIST",payload:movie})}  className="btn btn-primary btn-sm">Add To Watchlist</button>
                        <button type="button" onClick={()=>dispatch({type:"REMOVE_FROM_WATCHLIST",payload:movie})}  className="btn btn-danger btn-sm">Remove From Watchlist</button>
                        <button type="button" onClick={()=>dispatch({type:"TOGGLE_LIKE",payload:movie})}  className="btn btn-warning btn-sm">{movie.liked ? "Unlike" : "Like"}</button>
                   </div>
               </div>
            </div>
        )

}
export default MovieCard;