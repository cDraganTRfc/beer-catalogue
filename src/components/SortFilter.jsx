import '../styles/sortfilter.scss';
import { useState } from 'react';

const SortFilter = ({ setSelectSort, selectSort }) => {
    const sortOptions = ['Name', 'abv', 'id'];
  
    const [showMenu, setShowMenu] = useState(false);
  
    return (
      <div className="dropdown">
        <button className="dropbtn" onClick={() => setShowMenu(!showMenu)}>
          Sort by:
          <img
            src="https://www.iconbolt.com/iconsets/basicons/chevron-down-arrow.svg"
            alt="downarrow"
          />
        </button>
  
        <div className={"dropdown-content " + (showMenu ? 'visible' : '')}>
          {sortOptions.map((sortOption, index) => (
            <button
              key={index}
              onClick={() => setSelectSort(sortOption)}
              className={selectSort === sortOption ? 'selected' : ''}
            >
              {sortOption}
            </button>
          ))}
        </div>
      </div>
    );
  };
 
export default SortFilter;