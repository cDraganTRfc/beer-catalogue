import { Link } from "react-router-dom";
import "../styles/beer.scss";
import noImageIcon from "../images/alt-image.png"


const Beer = ({beer}) => {
    return ( 
        <Link to={`/beer/${beer.name}`} className="card-container">
        <div className="beer-container">
            <p className="name">{beer.name}</p>
            <p className="id">#{beer.id}</p>
            {beer.image_url ? (
          <img src={beer.image_url} alt="beer-image" />
        ) : (
          <img src={noImageIcon} alt="No Image" />
        )}
        </div>
        </Link>
     );
}
 
export default Beer;