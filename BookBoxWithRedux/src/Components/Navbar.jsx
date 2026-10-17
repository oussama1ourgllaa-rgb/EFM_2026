import {Link} from "react-router-dom";
import {useSelector} from 'react-redux';


const Navbar=()=>{


   const livre=useSelector(s=>s.livre);
    return(
        <nav className="navbar  navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">BookStore</Link>
                <div className="d-flex gap-5">
                    <Link className="nav-link" to="/">Books</Link>
                    <Link className="nav-link" to="/likedlist">Liked <span className="badge bg-primary">{livre.filter(l=>l.liked).length}</span> </Link>
                    <Link className="nav-link" to="/watchlist">Watchlist <span className="badge bg-success">{livre.filter(l=>l.inWatchlist).length}</span></Link>
                </div>
            </div>
        </nav>




    )


}
export default Navbar;