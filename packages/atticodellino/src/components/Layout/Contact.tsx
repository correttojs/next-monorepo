import React from "react";
import { FaPhoneSquare } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import classNames from "classnames";

const EMAIL = process.env.NEXT_PUBLIC_FROM_EMAIL;
const TEL = process.env.NEXT_PUBLIC_PHONE;

export const Contacts: React.FC<{ direction?: "row" | "col" }> = ({
  direction,
}) => {
  return (
    <div
      className={classNames([
        `flex justify-center m-2`,
        direction === "row" ? `flex-row` : `flex-col`,
      ])}
    >
      <div
        role="presentation"
        className={classNames([
          `flex flex-row items-center`,
          direction === "row" && `mr-2`,
        ])}
        onClick={() => {
          window.open(`tel:${TEL}`, "emailWindow");
        }}
      >
        <FaPhoneSquare />
        <a data-testid="header-phone" className="ml-1">
          {TEL}
        </a>
      </div>
      <div
        role="presentation"
        className="flex flex-row items-center"
        onClick={() => {
          window.open(`mailto:${EMAIL}`, "emailWindow");
        }}
      >
        <MdMail />
        <a data-testid="header-mail" className="ml-1">
          {EMAIL}
        </a>
      </div>
    </div>
  );
};
