import React, { useState, useEffect } from "react";
import Link from "next/link";
import { OpacityHover } from "../../styles/globalVars";
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
  const [isTransparentState, setIsTransparent] = useState(isTransparent);
  useEffect(() => {
    const callback = () => {
      if (window.scrollY > 100) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    };
    if (isTransparent) {
      window.addEventListener("scroll", callback);
    }
    return () => {
      window.removeEventListener("scroll", callback);
    };
  });
  return (
    <nav
      className={`${
        className ?? ""
      }flex fixed z-10 flex-wrap justify-between items-center p-6 w-full text-white top-0  bg-black${
        isTransparentState && !isMobileOpen
          ? ` bg-opacity-30 transition-colors duration-500 `
          : ` `
      } `}
    >
      <div className="flex items-center mr-6 text-white  ">
        <Link href="/" passHref={true}>
          <a>
            <span className="pl-2 text-2xl">{title}</span>
          </a>
        </Link>
      </div>

      <div className="block lg:hidden">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className={`flex items-center py-2 px-3 rounded border hover:border-white ${OpacityHover}`}
        >
          {isMobileOpen ? <BiX /> : <BiMenu />}
        </button>
      </div>

      <div
        className={`${
          isMobileOpen ? " " : "hidden "
        } lg:flex flex-grow lg:items-center pt-6 lg:pt-0 w-full lg:w-auto`}
      >
        <ul className="lg:flex flex-1 justify-end items-center">
          {items.map((item, k) => (
            <NavLink key={k} {...item}></NavLink>
          ))}
        </ul>
      </div>
    </nav>
  );
};
