import { Link } from "react-router-dom";
import '../styles/notfound.scss';


const NotFound = () => {
    return ( <div className="not-found-container">
        <h1>404</h1>
        <div className="bottom">
        <h2>Wanna go to the gym with me?</h2> 
        <Link to={"/"}>You spelled “brewery” wrong.</Link> </div>
    </div> );
}
 
export default NotFound;