import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const Nav: React.FC<{ title: string }> = ({ title }) => {
  const router = useRouter();

  const baseRoute = `/${router.query.apartment as string}`;
  return (
    <nav className="fixed flex flex-col w-full px-6 py-4 text-center bg-white shadow-lg sm:flex-row sm:justify-between sm:items-baseline sm:text-left">
      <div className="mb-2 sm:mb-0">
        <Link href={baseRoute} passHref={true}>
          <a className="text-2xl no-underline">{title}</a>
        </Link>
      </div>
      <div>
        <Link href={`${baseRoute}/todo`} passHref={true}>
          <a className="ml-2 text-lg no-underline">To Do @Garda</a>
        </Link>
        <Link href={`${baseRoute}/howto`} passHref={true}>
          <a className="ml-2 text-lg no-underline">How To</a>
        </Link>
      </div>
    </nav>
  );
};
