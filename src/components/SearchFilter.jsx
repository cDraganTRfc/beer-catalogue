import "../styles/searchfilter.scss";

const SearchFilter = ({setSearchWord}) => {
    return ( <form className="search-filter">
        <button type="submit">Search
        </button>
        <input type="search" placeholder="I feel like getting plushed to the scuppers!" 
        onChange={(e)=> setSearchWord(e.target.value)}/>
    </form> );
}
 
export default SearchFilter;