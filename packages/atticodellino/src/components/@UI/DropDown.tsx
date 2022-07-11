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
    className="block py-2 px-4 whitespace-nowrap bg-gray-100 hover:bg-gray-200 cursor-pointer"
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
        className="inline-flex items-center py-2 px-2 rounded"
        data-cy="dropdown"
      >
        <MdLanguage size={"1.6em"} />
      </button>
      <ul className="hidden absolute pt-1 text-gray-700">{children}</ul>
    </div>
  );
};
