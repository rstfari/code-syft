"use client";
import Header from "../components/header";
import Search from "../components/search";
import { API_KEY, CONTEXT_KEY } from "../api/keys";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import SearchResults from "../components/searchresults";

export default function Results() {
  const searchParams = useSearchParams();
  const term = searchParams.get("term");
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function getResults() {
      const res = await fetch(`/api?term=${term}`);
      const data = await res.json();
      console.log(data);
      setData(data);
    }
    getResults();
  }, []);

  if (!data) {
    return <div className="text-white">Loading...</div>;
  }
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-zinc-900 text-lg items-center sticky top-0">
        <Search pageHeadText="Results" />
      </div>

      <Header />
      <SearchResults results={data.data} />
    </div>
  );
}
