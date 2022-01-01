import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BiMenu, BiX } from "react-icons/bi";

import { NavLink, NavLinkProps } from "./NavLink";

type HeaderProps = {
  items: NavLinkProps[];
  title: string;
  isTransparent?: boolean;
  className?: string;
  isOpen?: boolean;
};

export const Header: React.FC<HeaderProps> = ({
  items,
  title,
  isTransparent,
  className,
  isOpen = false,
}) => {
  const [isMobileOpen, setIsMobileOpen] = useState(isOpen);

  return (
    <nav
      className={`${
        className ?? ""
      }flex fixed z-20 flex-wrap justify-between items-center p-2 w-full text-white top-0  bg-black  transition-colors duration-500
      ${/*isTransparent ? "md:bg-opacity-30 hover:bg-opacity-100" : "" */ ""}
      `}
    >
      <div className="flex items-center mr-6 text-white  ">
        <Link href="/" passHref={true}>
          <a>
            <span className="pl-2 text-2xl white-opacity">{title}</span>
          </a>
        </Link>
      </div>

      <div className="block md:hidden">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className={`flex items-center py-2 px-3 rounded border hover:border-white white-opacity`}
        >
          {isMobileOpen ? <BiX /> : <BiMenu />}
        </button>
      </div>

      <div
        className={`${
          isMobileOpen ? " " : "hidden "
        } md:flex flex-grow md:items-center pt-6 md:pt-0 w-full md:w-auto`}
      >
        <ul className="flex-1 justify-end items-center md:flex">
          {items.map((item, k) => (
            <NavLink key={k} {...item}></NavLink>
          ))}
        </ul>
      </div>
    </nav>
  );
};
