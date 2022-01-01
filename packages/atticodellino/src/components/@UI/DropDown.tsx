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
    css={tw`cursor-pointer bg-gray-100 hover:bg-gray-200 py-2 px-4 block whitespace-nowrap`}
    onClick={onClick}
    role="presentation"
  >
    {text}
  </li>
);

export const DropDown: React.FC = ({ children }) => {
  return (
    <Control css={tw` inline-block relative `}>
      <button
        css={tw`py-2 px-2 rounded inline-flex items-center`}
        data-cy="dropdown"
      >
        <MdLanguage size={"1.6em"} />
      </button>
      <UL css={tw`absolute hidden text-gray-700 pt-1`}>{children}</UL>
    </Control>
  );
};
