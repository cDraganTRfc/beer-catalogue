import { Link } from "react-router-dom";
import "../styles/beer.scss";
import noImageIcon from "../images/alt-image.png"

const cleanName = (name) => {
  return name.replace(/[^\w\s]/gi, "");
};
const Beer = ({ beer }) => {
  const cleanedName = cleanName(beer.name);

  return (
      <Link to={`/beer/${cleanedName}`} className="card-container">
        <div className="beer-container">
            <p className="name">{beer.name}</p>
            <p className="id">#{beer.id}</p>
            {beer.image_url ? (
          <img src={beer.image_url} alt="beer-image" />
        ) : (
          <img src={noImageIcon} alt="No Image" />
        )}
        <p className="procentage">{beer.abv}% Alc.</p>
        </div>
        </Link>
     );
}
 
export default Beer;