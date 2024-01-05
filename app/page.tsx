"use client";
import Navigation from "./components/navigation";
import Search from "./components/search";

export default function Home() {
  return (
    <div className="bg-zinc-900 h-screen flex flex-col  items-center">
      <Navigation />
      <Search pageHeadText="Search" />
    </div>
  );
}
