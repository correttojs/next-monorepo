import Link from "next/link";
import React from "react";

export type NavLinkProps = {
  href: string;
  title: string;
  isActive: boolean;
  lang?: string;
};

export const NavLink: React.FC<React.PropsWithChildren<NavLinkProps>> = ({
  href,
  title,
  isActive,
  lang,
}) => {
  return (
    <li className="mr-3">
      <Link href={href} passHref={true} locale={lang}>
        <a
          className={`inline-block py-2 px-4 uppercase ${
            !isActive && ` white-opacity`
          }`}
        >
          {title}
        </a>
      </Link>
    </li>
  );
};
