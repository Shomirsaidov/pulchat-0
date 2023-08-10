import Link from "next/link";
import React from "react";

const NavbarComp = () => {
  const links = [
    {
      to: "/",
      label: "Home",
      icon: "/assets/home.svg"
    },
    {
      to: "/posts",
      label: "Posts",
      icon: '/assets/profile.svg'
    },
    
  ];

  return (
       
        <div style={{position: 'fixed', bottom: '0px', width: '100%'}} className="justify-evenly shadow-xl rounded-lg rounded-b-none items-center p-4 bg-yellow-500 text-white flex md:hidden">
            {links.map((link) => (
              <div className="flex flex-col items-center">
                <Link key={link.to} className="" href={link.to}>
                  <img src={link.icon} width={40}/>
                </Link>
              </div>
            ))}
        </div>

  );
};

export default NavbarComp;



