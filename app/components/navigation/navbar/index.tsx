import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-center space-x-8 p-2 bg-slate-950 text-gray-300">
      <Link href="/about">About</Link>
      <Link href="/news">News</Link>
      <Link href="/profile">Profile</Link>
    </div>
  );
};

export default Navbar;
