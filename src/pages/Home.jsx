import { useQuery } from "@tanstack/react-query";
import "../styles/home.scss";
import Beer from "../components/Beer";
import { fetchData } from "../helpers/fetchData";


const Home = () => { 

const {isLoading, error, data} = useQuery({
    queryKey: ['allBeers'],
    queryFn: () => fetchData(),
})

    return ( <section className="home-container">

        {data && data.map((beer) => (
        <Beer beer={beer} key={beer.name}/>
        ))}

    </section> );
}
 
export default Home;