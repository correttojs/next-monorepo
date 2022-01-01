import React from "react";
import { MdLanguage } from "react-icons/md";
import styled from "styled-components";
import tw from "twin.macro";

const UL = styled.ul`
  right: 0;
`;
const Control = styled.div`
  &:hover ${UL} {
    display: block;
  }
`;

export const DropDownItem: React.FC<{
  text: string;
  onClick: () => void;
}> = ({ text, onClick }) => (
  <li
    data-cy="dropdown-item"
    className="block py-2 px-4 whitespace-nowrap bg-gray-100 hover:bg-gray-200 cursor-pointer"
    onClick={onClick}
    role="presentation"
  >
    {text}
  </li>
);

export const DropDown: React.FC = ({ children }) => {
  return (
    <Control className=" inline-block relative ">
      <button
        className="inline-flex items-center py-2 px-2 rounded"
        data-cy="dropdown"
      >
        <MdLanguage size={"1.6em"} />
      </button>
      <UL className="hidden absolute pt-1 text-gray-700">{children}</UL>
    </Control>
  );
};
