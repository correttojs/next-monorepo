import { useRouter } from "next/router";
import React from "react";

import { DropDown, DropDownItem } from "../@UI/DropDown";
import { Contacts } from "./Contact";
import { useGlobal } from "./useGlobal";
import { MdHelpOutline } from "react-icons/md";

export const Header: React.FC<React.PropsWithChildren<unknown>> = () => {
  const { apartment, name } = useGlobal();
  const { pathname, asPath, push } = useRouter();

  return (
    <header className="fixed z-10 flex w-full flex-wrap items-center justify-between bg-sky-900 p-4 text-white">
      <div className="mr-6 flex shrink-0 items-center text-white">
        <a
          className="font-dancing text-3xl font-bold no-underline md:text-4xl"
          href={`/${apartment.toLowerCase()}`}
          data-testid="header-title"
        >
          {`L'attico del Lino ${name}`}
        </a>
      </div>

      <div className="flex">
        <div className=" hidden md:block">
          <Contacts direction="row" />
        </div>
        <button
          data-testid="faq"
          className="inline-flex items-center rounded p-2"
          onClick={() => push("/faq")}
        >
          <MdHelpOutline size={"1.6em"} />
        </button>
        <DropDown>
          <DropDownItem
            text="Italiano"
            onClick={() => push(pathname, asPath, { locale: "it" })}
          />
          <DropDownItem
            text="English"
            onClick={() => push(pathname, asPath, { locale: "en" })}
          />
        </DropDown>
      </div>
    </header>
  );
};
