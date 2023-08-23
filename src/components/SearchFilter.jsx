import React, { useState, useEffect } from 'react';
import "../styles/searchfilter.scss";

const SearchFilter = ({ setSearchWord }) => {
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const storedSearchInput = localStorage.getItem('searchInput');
    if (storedSearchInput) {
      setSearchInput(storedSearchInput);
      setSearchWord(storedSearchInput); 
    }
  }, []);

  const handleSearch = (e) => {
    const newSearchInput = e.target.value;
    setSearchInput(newSearchInput);
    setSearchWord(newSearchInput);

    
    localStorage.setItem('searchInput', newSearchInput);
  };

  return (
    <form className="search-filter">
      <button type="submit">Search</button>
      <input
        type="search"
        placeholder="I feel like getting plushed to the scuppers!"
        value={searchInput}
        onChange={handleSearch}
      />
    </form>
  );
};

export default SearchFilter;