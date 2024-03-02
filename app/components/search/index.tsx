"use client";
import Searchbar from "./searchbar";
import Logo from "./logo";
import Link from "next/link";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";

export default function Search(props: { pageHeadText: string }) {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const getSearch = (e: any) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/results?term=${term}`);
  };

  return (
    <div className="flex flex-col space-x-1 p-2 w-11/12 items-center md:flex-row mx-auto">
      <Link href="/">
        <Logo headText={props.pageHeadText} />
      </Link>
      <form className="flex-grow mt-2" onSubmit={getSearch}>
        <Searchbar searchInput={searchInputRef} />
        <input type="submit" className=" hidden" />
      </form>
    </div>
  );
}
