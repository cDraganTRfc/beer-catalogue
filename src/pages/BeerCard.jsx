import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { api } from "../helpers/api";
import "../styles/beercard.scss";
import logo from "../images/diy-dog-beer-logo.png";
import noImageIcon from "../images/alt-image.png";
import foodImg from "../images/food.png"
import tip from "../images/tip.png"


const BeerCard = () => {

    const {name} = useParams();
    const cleanedName = name.replace(/[^\w\s]/gi, "");
    const navigate = useNavigate();

    const {isLoading, error, data} = useQuery({
        queryKey: ["beer", name],
        queryFn: () => api(cleanedName)
        
    });

    if (!data || data.length === 0) {
        return <div>No beer data available</div>;
    }

    const beer = data[0];


    return (
        <div className="beer-page">
            <div className="beer-wrapper">
            <button onClick={()=> navigate(-1)}>
                <img src="https://www.iconbolt.com/iconsets/basicons/chevron-left-arrow.svg" alt="leftArrow" />
                Back</button>
                {data && 
                <div className="beer-info-wrapper">
                <nav className="nav-info">
                    <div className="left">
                        <img src={logo} alt="logo" />
                        <div className="name">
                        <h1>#{data[0].id}</h1>
                        <h2>{data[0].name}</h2>
                        </div>
                    </div>
                    <div className="right">
                        <p>First brewed: {data[0].first_brewed}</p>
                    </div>
                </nav>
                <div className="tagline">
                    <p>{data[0].tagline}</p>
                    <div className="tagline-right">
                    <div className="abv">
                    <p>ABV %</p> 
                    <p>{data[0].abv}</p>
                    </div>
                    <div className="ibu">
                    <p>IBU </p>
                    <p>{data[0].ibu}</p> 
                    </div>
                    <div className="og">
                    <p>OG </p>
                    <p>{data[0].target_og}</p>
                    </div>
                    </div>
                </div>
                <div className="middle-wrapper">
                    <div className="description">
                        <p className="title">This beer is: </p>
                        <p>{data[0].description}</p>
                    </div>
                    <div className="ingredients">
                        <p className="title">Ingredients: </p>
                        <p>{data[0].ingredients.yeast}</p>
                        <div className="hops">
                  {data[0].ingredients.hops.map((hop, index) => (
                    <div className="hops-values" key={index}>
                      <p className="one">{hop.name}</p>
                      <p className="two">{hop.amount.value}</p>
                      <p className="three">{hop.amount.unit}</p>
                    </div>
                  ))}
                        </div>
                    </div>
                    <div className="basics">
                        <p className="title">Basics:</p>
                        <div className="brew">  
                        <p>Boil volume: <span>{data[0].boil_volume.value}</span></p>
                        <p>{data[0].boil_volume.unit}</p>
                        </div>
                        <p>Contributed by: {data[0].contributed_by}</p>
                        <div className="target">
                        <p>EBC: <span className="ebc">{data[0].ebc}</span></p>
                        <p>SRM: <span className="ebc">{data[0].srm}</span></p>
                        <p>PH .: <span className="ebc">{data[0].ph}</span></p>
                        <p>Target OG: <span>{data[0].target_og}</span> </p>
                        <p>Target FG: <span>{data[0].target_fg}</span></p>
                        </div>
                    </div>
                    <div className="image-container">
                    {beer.image_url ? (
          <img src={beer.image_url} alt="beer-image" />
        ) : (
          <img src={noImageIcon} alt="No Image" />
        )}
                </div>
                <div className="food-pairiting">
                    <span className="title">Food pairing:</span>
                    <p>{data[0].food_pairing[0]};</p>
                    <p>{data[0].food_pairing[1]};</p>
                    <p>{data[0].food_pairing[2]};</p>
                    <div><img src={foodImg} alt="foodImg" /></div>
                </div>
                <div className="brewer-tips">
                    <p className="title">Brewer tips: </p>
                    <p>{data[0].brewers_tips}</p>
                    <div><img src={tip} alt="tipImg" /></div>
                </div>
                </div>
                <footer className="footer">
                   <p> If you think you can win me over with craft beer and nachos, you’re right!</p>
                    </footer>
                </div>}
            </div>
        </div>
    );
}
 
export default BeerCard;