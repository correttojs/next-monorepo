import React from "react";
import Link from "next/link";

export const Nav: React.FC = () => {
  return (
    <nav className="fixed flex flex-col w-full px-6 py-4 text-center bg-white shadow-lg sm:flex-row sm:text-left sm:justify-between sm:items-baseline">
      <div className="mb-2 sm:mb-0">
        <a
          href="/home"
          className="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
        >
          Residence Candor
        </a>
      </div>
      <div>
        <Link href="/todo" passHref={true}>
          <a className="ml-2 text-lg no-underline text-grey-darkest hover:text-blue-dark">
            To Do @Garda
          </a>
        </Link>
        <a
          href="/howto"
          className="ml-2 text-lg no-underline text-grey-darkest hover:text-blue-dark"
        >
          How To
        </a>
      </div>
    </nav>
  );
};
