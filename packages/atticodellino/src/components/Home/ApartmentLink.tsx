import styled from "styled-components";
import tw from "twin.macro";

import { MQ_MOBILE } from "../Layout";

export const ApartmentLink = styled.a<{ backgroundColor: string }>`
  ${tw`text-white`}
  position: absolute;
  padding: 0 20px;
  right: 0px;
  height: 0;
  border-bottom: 30px solid ${({ backgroundColor }) => backgroundColor};
  border-top: 30px solid ${({ backgroundColor }) => backgroundColor};
  border-left: 20px solid transparent;
  cursor: pointer;
  font-size: 1.5em;
  line-height: 0px;
  text-decoration: none;
  @media ${MQ_MOBILE} {
    font-size: 1.2em;
    border-bottom: 20px solid ${({ backgroundColor }) => backgroundColor};
    border-top: 20px solid ${({ backgroundColor }) => backgroundColor};
    border-left: 10px solid transparent;
  }
`;
