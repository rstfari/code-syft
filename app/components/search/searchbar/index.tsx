import React from "react";

const Searchbar = () => {
  return (
    <input
      className=" h-9 w-full mt-2 flex-grow bg-slate-400
       outline-none p-2 rounded-full  hover:shadow-lg"
      type="search"
      id="searchbar"
    />
  );
};

export default Searchbar;
