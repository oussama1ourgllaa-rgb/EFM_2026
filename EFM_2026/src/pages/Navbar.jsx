import {Link} from "react-router-dom";
import { useContext } from "react";
import { MovieContext } from "../Components/MovieContext";
const Navbar = () => {
    return(
        <nav className="navbar bg-dark navbar-dark">
            <div className="container">

                <Link className="navbar-brand" to="/">
                    MovieBox
                </Link>

                <div className="navbar-nav d-flex flex-row">

                    <Link className="nav-link mx-2" to="/tous">
                        Tous
                    </Link>

                    <Link className="nav-link me-3 position-relative" to="/watchlist">
                        WatchList
                    </Link>
                    <Link className="nav-link me-3 position-relative" to="/favoris">
                        Favoris
                        <span className="badge bg-danger position-absolute top-0"></span>
                    </Link>

                </div>

            </div>
    </nav>
    )
}
export default Navbar;