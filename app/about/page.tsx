"use client";
import React from "react";
import Logo from "../components/search/logo";
import Link from "next/link";
import Navigation from "../components/navigation";
import Foot from "../components/footer";

const About = () => {
  return (
    <div className="flex flex-col h-screen items-center">
      <Navigation />
      <Link href="/" className="p-2">
        <Logo headText="About"/>
      </Link>
      <Foot />
    </div>
  )
};

export default About;
