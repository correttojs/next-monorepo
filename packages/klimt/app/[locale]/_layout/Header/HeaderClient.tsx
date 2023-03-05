"use client";
import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

export const HeaderClient: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
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
        {children}
      </div>
    </>
  );
};
