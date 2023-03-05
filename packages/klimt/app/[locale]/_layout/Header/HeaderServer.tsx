import React from "react";
import Link from "next/link";

import { NavLink, NavLinkProps } from "./NavLink";
import { HeaderClient } from "./HeaderClient";

type HeaderProps = {
  items: NavLinkProps[];
  title: string;
  className?: string;
  isMobileOpen?: boolean;
};

export const Header: React.FC<React.PropsWithChildren<HeaderProps>> = ({
  items,
  title,
  className,
}) => {
  return (
    <nav
      className={`${
        className ?? ""
      }fixed top-0 z-20 flex w-full flex-wrap items-center justify-between bg-black p-2  text-white  transition-colors duration-500 
      `}
    >
      <div className="mr-6 flex items-center text-white">
        <Link href="/" passHref={true}>
          <span className="white-opacity pl-2 text-2xl">{title}</span>
        </Link>
      </div>

      <HeaderClient>
        <ul className="flex-1 items-center justify-end md:flex">
          {items.map((item, k) => (
            <NavLink key={k} {...item}></NavLink>
          ))}
        </ul>
      </HeaderClient>
    </nav>
  );
};
