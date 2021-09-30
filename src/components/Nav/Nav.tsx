import React from "react";
import Link from "next/link";

export const Nav: React.FC = () => {
  return (
    <nav className="fixed flex flex-col w-full px-6 py-4 text-center bg-white shadow-lg sm:flex-row sm:justify-between sm:items-baseline sm:text-left">
      <div className="mb-2 sm:mb-0">
        <Link href="/" passHref={true}>
          <a className="text-2xl no-underline">Residence Candor</a>
        </Link>
      </div>
      <div>
        <Link href="/todo" passHref={true}>
          <a className="ml-2 text-lg no-underline">To Do @Garda</a>
        </Link>
        <a className="ml-2 text-lg no-underline">How To</a>
      </div>
    </nav>
  );
};
