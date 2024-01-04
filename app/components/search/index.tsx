"use client";
import Searchbar from "./searchbar";
import Logo from "./logo";
import Link from "next/link";

const Search = () => {
  return (
    <div className="flex space-x-1 p-2 w-full items-center">
      <Link href="/"><Logo /></Link>
      <Searchbar />
    </div>
  )
}

export default Search;