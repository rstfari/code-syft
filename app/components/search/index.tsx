"use client";
import Searchbar from "./searchbar";
import Logo from "./logo";
import Link from "next/link";

const Search = (props: { pageHeadText: string }) => {
  return (
    <div className="flex flex-col space-x-1 p-2 w-full items-center md:flex-row">
      <Link href="/"><Logo headText={props.pageHeadText}/></Link>
      <Searchbar />
    </div>
  )
}

export default Search;