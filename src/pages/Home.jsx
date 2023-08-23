import { useQuery } from "@tanstack/react-query";
import "../styles/home.scss";
import Beer from "../components/Beer";
import { fetchData } from "../helpers/fetchData";
import { useState } from "react";
import SearchFilter from "../components/SearchFilter";
import SortFilter from "../components/SortFilter";
import Loader from "../components/Loader";


const Home = () => { 

    const [allBeers, setAllBeers] = useState([]); 
    const [currentPage, setCurrentPage] = useState(1); 
    const pageSize = 80; 

    

const {isLoading, error, data} = useQuery({
    queryKey: [`allBeers-${currentPage}`], 
    queryFn: () => fetchData(currentPage, pageSize),
})

const [searchWord, setSearchWord] = useState("");
const [selectSort, setSelectSort] = useState("")


const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

const handleLoadLess = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      setAllBeers((prevData) => prevData.slice(0, -pageSize));
    }
  };

    return ( <section className="home-container">
        <div className="filter-container">
        <SearchFilter setSearchWord={setSearchWord}/>
        {isLoading && <Loader />}
        <SortFilter setSelectSort={setSelectSort}/>
        </div>
        <div className="wrapper">
        {data && 
        data.filter(beer => {
            if (searchWord === "") {
                return beer;
            } else if (beer.name.toLowerCase()
            .includes(searchWord.toLowerCase())) {
                return beer;
            }
        })
        .sort((a, b) => {
          if (selectSort === "Name") {
            return a.name.localeCompare(b.name);
          } else if (selectSort === "abv") {
            return a.abv - b.abv;
          } else if (selectSort === "id") {
            return a.id - b.id;
          }
        })
        .map((beer) => (
        <Beer beer={beer} key={beer.name}/>
        ))}
</div>

<div className="button-container">
    
          <button className="load-less-button" onClick={handleLoadLess}>
            Show less
          </button>

          <button className="load-more-button" onClick={handleLoadMore}>
            Show more
          </button>
        </div>
    </section> );
}
 
export default Home;