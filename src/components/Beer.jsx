import { Link } from "react-router-dom";


const Beer = ({beer}) => {
    return ( 
        <Link to={`/beer/${beer.name}`}>
        <div className="beer-container">
            <p className="name">{beer.name}</p>
            <img src={beer.image_url} alt="beer-image" />
        </div>

        </Link>
     );
}
 
export default Beer;