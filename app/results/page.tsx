"use client";
import Header from "../components/header";
import Search from "../components/search";

export default function Results() {
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-zinc-900 text-lg items-center sticky top-0">
        <Search pageHeadText="Results" />
      </div>
      <Header />
    </div>
  );
}

