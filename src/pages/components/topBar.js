import Link from "next/link";
import React from "react";

const TopTitle = () => {
  const links = [
    {
      to: "/",
      label: "Home",
    },
    {
      to: "/about",
      label: "About",
    },
    {
      to: "/contact",
      label: "Contact",
    },
  ];

  return (
      <>
        <div className="justify-between items-center p-4 text-white hidden md:flex" style={{background: 'linear-gradient(#000,#beaf27)'}}>
          <div></div>
          <h1 href="/" className="font-black text-xl text-center">P U L B O X</h1>
          <nav className="space-x-8 hidden md:flex">
            {links.map((link) => (
              <Link key={link.to} className="" href={link.to}>{link.label}</Link>
            ))}
          </nav>
        </div>

        <div className="justify-center shadow-xl rounded-lg rounded-t-none items-center p-4 text-white flex md:hidden"
        style={{background: 'linear-gradient(45deg,#000,#000)'}}>
          <h1 href="/" className="font-black text-xl text-center">P U L B O X</h1>
        </div>
      </>
  );
};

export default TopTitle;