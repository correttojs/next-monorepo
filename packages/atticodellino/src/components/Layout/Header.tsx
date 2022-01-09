import { useRouter } from "next/router";
import React from "react";

import { DropDown, DropDownItem } from "../@UI/DropDown";
import { Contacts } from "./Contact";
import { useGlobal } from ".";
import { MdHelpOutline } from "react-icons/md";

export const Header: React.FC = () => {
  const { apartment, name } = useGlobal();
  const { pathname, asPath, push } = useRouter();

  return (
    <header className="flex fixed z-10 flex-wrap justify-between items-center p-4 w-full text-white bg-sky-900">
      <div className="flex shrink-0 items-center mr-6 text-white">
        <a
          className="font-dancing text-3xl font-bold no-underline md:text-4xl"
          href={`/${apartment.toLowerCase()}`}
        >
          {name}
        </a>
      </div>

      <div className="flex">
        <div className=" hidden md:block">
          <Contacts direction="row" />
        </div>
        <button
          className="inline-flex items-center p-2 rounded"
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
