"use client";
import React, { useState } from "react";
import Link from "next/link";
import { BiMenu, BiX } from "react-icons/bi";

import { NavLink, NavLinkProps } from "./NavLink";

type HeaderProps = {
  items: NavLinkProps[];
  title: string;
  className?: string;
  isOpen?: boolean;
};

export const Header: React.FC<React.PropsWithChildren<HeaderProps>> = ({
  items,
  title,
  className,
  isOpen = false,
}) => {
  const [isMobileOpen, setIsMobileOpen] = useState(isOpen);

  return (
    <nav
      className={`${
        className ?? ""
      }fixed top-0 z-20 flex w-full flex-wrap items-center justify-between bg-black p-2  text-white  transition-colors duration-500 
      `}
    >
      <div className="mr-6 flex items-center text-white  ">
        <Link href="/" passHref={true}>
          <span className="white-opacity pl-2 text-2xl">{title}</span>
        </Link>
      </div>

      <div className="block md:hidden">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className={`white-opacity flex items-center rounded border py-2 px-3 hover:border-white`}
        >
          {isMobileOpen ? <BiX /> : <BiMenu />}
        </button>
      </div>

      <div
        className={`${
          isMobileOpen ? " " : "hidden "
        } w-full grow pt-6 md:flex md:w-auto md:items-center md:pt-0`}
      >
        <ul className="flex-1 items-center justify-end md:flex">
          {items.map((item, k) => (
            <NavLink key={k} {...item}></NavLink>
          ))}
        </ul>
      </div>
    </nav>
  );
};
