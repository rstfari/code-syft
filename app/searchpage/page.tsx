"use client"
import Search from "../components/search";

export default function Searchpage() {
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-zinc-900 text-4xl w-full items-center justify-cen">
        <Search pageHeadText="Searchpage" />
      </div>
    </div>
  )
}