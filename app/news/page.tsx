"use client";
import Foot from "../components/footer";
import Navigation from "../components/navigation";
import Search from "../components/search";

export default function News() {
  return (
    <div className="bg-zinc-900 h-screen flex flex-col  items-center">
      <Navigation />
      <Search pageHeadText="News" />
      <Foot />
    </div>
  );
}
