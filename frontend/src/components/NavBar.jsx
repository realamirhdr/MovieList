import {Link} from "react-router-dom";
import '../css/NavBar.css'

function NavBar(){
    return (
        <nav className="navbar">
            <div className="brand">
                <Link to="/">Movie List</Link>
            </div>
            <div className="navbar-elements">
                <Link to="/">Home</Link>
                <Link to="/Favorites">Favorites</Link>
            </div>
        </nav>
    )
}

export default NavBar