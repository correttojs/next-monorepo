import React from "react";
import { MdLanguage } from "react-icons/md";

import classNames from "classnames";
import styles from "./DropDown.module.scss";

export const DropDownItem: React.FC<React.PropsWithChildren<{
  text: string;
  onClick: () => void;
}>> = ({ text, onClick }) => (
  <li
    data-cy="dropdown-item"
    className="block cursor-pointer whitespace-nowrap bg-gray-100 py-2 px-4 hover:bg-gray-200"
    onClick={onClick}
    role="presentation"
  >
    {text}
  </li>
);

export const DropDown: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div className={classNames(styles.control, "inline-block relative ")}>
      <button
        className="inline-flex items-center rounded p-2"
        data-cy="dropdown"
      >
        <MdLanguage size={"1.6em"} />
      </button>
      <ul className="absolute hidden pt-1 text-gray-700">{children}</ul>
    </div>
  );
};
