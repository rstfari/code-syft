import React from "react";
import Logo from "../components/search/logo";
import Link from "next/link";
import Navigation from "../components/navigation";
import Foot from "../components/footer";

const Profile = () => {
  return (
    <div className="flex flex-col h-screen items-center">
      <Navigation />
      <Link href="/">
        <Logo headText="Profile"/>
      </Link>
      <Foot />
    </div>
  )
};

export default Profile;
