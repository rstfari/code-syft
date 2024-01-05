"use client";
import Navigation from "../components/navigation";
import Search from "../components/search";

export default function News() {
  return (
    <div>
      <Navigation />
      <Search pageHeadText="News" />
    </div>
  );
}
