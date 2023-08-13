import { useQuery } from "@tanstack/react-query";
import "../styles/home.scss";
import Beer from "../components/Beer";
import { fetchData } from "../helpers/fetchData";
import { useState } from "react";


const Home = () => { 

    const [allBeers, setAllBeers] = useState([]); // Svi podaci piva
    const [currentPage, setCurrentPage] = useState(1); // Trenutna stranica
    const pageSize = 80; // Broj stavki po stranici

    

const {isLoading, error, data} = useQuery({
    queryKey: [`allBeers-${currentPage}`], // Koristi currentPage kao deo ključa
    queryFn: () => fetchData(currentPage, pageSize),
})


const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const loadLess = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      setAllBeers((prevData) => prevData.slice(0, -pageSize));
    }
  };

    return ( <section className="home-container">
        <div className="wrapper">
        {data && 
        data.map((beer) => (
        <Beer beer={beer} key={beer.name}/>
        ))}

        
</div>

<div className="button-container">
          
          <button className="load-more-button" onClick={loadLess}>
            Load less
          </button>

          <button className="load-more-button" onClick={loadMore}>
            Load more
          </button>

        </div>
    </section> );
}
 
export default Home;