"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { NavLink } from "./NavLink";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { MenuMobile } from "./MenuMobile";
import Image from "next/image";

const navLinks = [
    {title: "Sobre Mim",
    path: "#about"},
    {title: "Projetos",
    path: "#projects"},
    {title: "Contato",
    path: "#contact"},
]

export const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    
 
  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-50 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">
        <Image src="/logo.png"  width={50}
              height={50}
              alt="logo notbook"/>
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2  text-slate-200 hover:text-cyan-500 hover:border-cyan-500"
            >
              <GiHamburgerMenu className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2  text-slate-200 hover:text-cyan-500 hover:border-cyan-500"
            >
              <MdOutlineClose className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0" >
          
           {navLinks.map((link, index) => (
                <li key={index}>
                    <NavLink href={link.path} title={link.title} />
                   </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuMobile links={navLinks} /> : null}
    </nav>
  );
};
