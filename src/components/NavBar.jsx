import { Link } from "react-router-dom";
import myImage from "../images/beer-logo.jpg";
import '../styles/navbar.scss';

const NavBar = () => {
    return ( <nav className="navbar">
        <ul>
            <li>
                <Link to={"/"}>
                    <img src={myImage} alt="beer-logo" />
                </Link>
            </li>
            <li>“Let no man thirst for good beer.” Sam Adams</li>
        </ul>
    </nav> );
}
 
export default NavBar;