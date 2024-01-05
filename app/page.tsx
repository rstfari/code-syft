"use client";
import Navigation from "./components/navigation";
import Search from "./components/search";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Search pageHeadText="Search" />
    </div>
  );
}
