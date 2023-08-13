import "../styles/searchfilter.scss";
import searchIcon from "../images/search-icon.svg"

const SearchFilter = () => {
    return ( <form className="search-filter">
        <button type="submit">Search
        </button>
        <input type="search" placeholder="I feel like getting plushed to the scuppers!" />
    </form> );
}
 
export default SearchFilter;