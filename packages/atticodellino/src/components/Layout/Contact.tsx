import React from "react";
import { FaPhoneSquare } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import tw from "twin.macro";

const EMAIL = process.env.NEXT_PUBLIC_FROM_EMAIL;
const TEL = process.env.NEXT_PUBLIC_PHONE;

export const Contacts: React.FC<{ direction?: "row" | "col" }> = ({
  direction,
}) => {
  return (
    <div
      css={[
        tw`flex justify-center m-2`,
        direction === "row" ? tw`flex-row` : tw`flex-col`,
      ]}
    >
      <div
        role="presentation"
        css={[tw`flex flex-row items-center`, direction === "row" && tw`mr-2`]}
        onClick={() => {
          window.open(`tel:${TEL}`, "emailWindow");
        }}
      >
        <FaPhoneSquare />
        <a css={tw`ml-1`}>{TEL}</a>
      </div>
      <div
        role="presentation"
        css={tw`flex flex-row items-center`}
        onClick={() => {
          window.open(`mailto:${EMAIL}`, "emailWindow");
        }}
      >
        <MdMail />
        <a css={tw`ml-1`}>{EMAIL}</a>
      </div>
    </div>
  );
};
