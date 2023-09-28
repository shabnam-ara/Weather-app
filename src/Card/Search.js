import React from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";

function Search(props) {
  return (
    <div className="searchContainer">
      <div className="searchIconContainer">
        <SearchIcon className="searchIcon" />
      </div>
      <input
        className="searchInput"
        onChange={props.onChange}
        value={props.value}
        placeholder="Search"/>
      <button
        className="searchButton"
        onClick={props.onSearch}
        disabled={props.isLoading}
      >
        {props.isLoading ? 'Loading...' : 'Get Weather'}
      </button>
    </div>
  );
}

export default Search;