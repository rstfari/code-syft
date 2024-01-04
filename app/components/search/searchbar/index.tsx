import React from "react";

const Searchbar = () => {
  return (
      <input className=" h-9 flex-grow bg-slate-400 placeholder:text-black
       outline-none p-2 rounded"
      type="search" id="searchbar" placeholder="&#123;Search&#125;" />
  )
}

export default Searchbar;