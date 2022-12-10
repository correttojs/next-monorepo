import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export type NavLinkProps = {
  href: string;
  title: string;
  lang?: string;
};

export const NavLink: React.FC<React.PropsWithChildren<NavLinkProps>> = ({
  href,
  title,
  lang,
}) => {
  const path = usePathname();
  return (
    <li className="mr-3">
      <Link
        href={href}
        passHref={true}
        locale={lang}
        className={`inline-block py-2 px-4 uppercase ${
          path !== href && ` white-opacity`
        }`}
      >
        {title}
      </Link>
    </li>
  );
};
