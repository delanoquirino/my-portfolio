"use client"

import { NavLink } from "./NavLink"


interface LinkData {
    title: string;
    path: string;
  }

interface MenuMobileProps {
    links: LinkData[];
}

  export const MenuMobile = ({links}: MenuMobileProps) => {
    
  return (
    <ul className="flex flex-col py-4 items-center ">
     
    {links.map((link, index) => (
      <li key={index}>
        <NavLink href={link.path} title={link.title} />
      </li>
    ))}
  </ul>
  )
}
