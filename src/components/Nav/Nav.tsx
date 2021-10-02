import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Links, PageQuery } from "../../generated/codegen";

export const Nav: React.FC<{ title: string; links: PageQuery["navigations"] }> =
  ({ title, links }) => {
    const router = useRouter();

    const baseRoute = `/${router.query.apartment as string}`;
    return (
      <nav className="fixed flex flex-col w-full px-6 py-4 text-center bg-white shadow-lg sm:flex-row sm:justify-between sm:items-baseline sm:text-left">
        <div className="mb-2 sm:mb-0">
          <Link href={"/"} passHref={true}>
            <a className="text-2xl no-underline">Home</a>
          </Link>
          {" - "}
          <Link href={baseRoute} passHref={true}>
            <a className="text-2xl no-underline">{title}</a>
          </Link>
        </div>
        <div>
          {links.map((item, index) => {
            if (item.link === Links.Home) {
              return null;
            }
            return (
              <>
                <Link
                  key={item.link}
                  href={`${baseRoute}/${item.link}`}
                  passHref={true}
                >
                  <a className="ml-2 text-lg no-underline">{item.title}</a>
                </Link>
                {index < links.length - 1 && " -"}
              </>
            );
          })}
        </div>
      </nav>
    );
  };
