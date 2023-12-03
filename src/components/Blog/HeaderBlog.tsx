"use client";
import { NavLink } from "../NavLink";
import { usePathname } from "next/navigation";
import { Transition } from "../Transition";

const navLinks = [{ title: "Voltar", path: "/" }];

export const HeaderBlog = () => {
  const path = usePathname();

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <h1 className="text-white text-2xl md:text-4xl">Blog</h1>

        <div className="md:w-auto" >
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {path && <Transition />}
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
