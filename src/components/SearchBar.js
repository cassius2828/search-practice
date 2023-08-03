import React from "react";
import tachyons from "tachyons";

export const SearchBar = ({onChange}) => {
    
  return (
    <div>
      <input
      onChange={onChange}
        className="tc"
        id="search-box"
        placeholder="search here"
        type="search"
      />
    </div>
  );
};
