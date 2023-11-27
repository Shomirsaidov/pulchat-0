import Head from "next/head";
import Link from "next/link";
import React from "react";

const MainContainer = ({ children, metaData }) => {

  const linksNav = [
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
      <>
        <Head>
            <title>{ metaData?.title }</title>
            <meta keywords={metaData?.keywords}></meta>
            <meta name="description" content={metaData?.description}></meta>
        </Head>
        <div className="justify-between items-center p-4 text-white hidden md:flex" style={{background: 'linear-gradient(#000,#beaf27)'}}>
          <div></div>
          <h1 href="/" className="font-black text-xl text-center">P U L B O X</h1>
          <nav className="space-x-8 hidden md:flex">
            {linksNav.map((link) => (
              <Link key={link.to} className="" href={link.to}>{link.label}</Link>
            ))}
          </nav>
        </div>

        <div className="justify-center shadow-xl rounded-lg rounded-t-none items-center p-4 text-white flex md:hidden"
        style={{background: 'linear-gradient(45deg,#000,#000)'}}>
          <h1 href="/" className="font-black text-xl text-center">P U L B O X</h1>
        </div>


        <div style={{position: 'fixed', bottom: '0px', width: '100%'}} className="justify-evenly shadow-xl rounded-lg rounded-b-none items-center p-4 bg-yellow-500 text-white flex md:hidden">
            {linksNav.map((link) => (
              <div className="flex flex-col items-center">
                <Link key={link.to} className="" href={link.to}>
                  <img src={link.icon} width={40}/>
                </Link>
              </div>
            ))}
        </div>

        { children }


      </>
  );
};

export default MainContainer;

