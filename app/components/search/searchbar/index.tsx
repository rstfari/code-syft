import React from "react";

const Searchbar = () => {
  return (
    <div className="flex h-9 mt-1 w-full bg-transparent rounded-full px-3 hover:shadow-lg focus-within:shadow-lg items-center outline outline-gray-300" >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 mr-3 text-gray-300">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

    <input
      className="flex-grow outline-none bg-transparent"
      type="search"
      id="searchbar"
    />
    </div>
  );
}

export default Searchbar;
