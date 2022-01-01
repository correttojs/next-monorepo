import styled from "styled-components";
import tw from "twin.macro";

import { ThemeType } from "../Layout/useGlobal";

export const ButtonSmall = styled.button`
  ${tw`text-white tracking-wider py-2 px-2 rounded`}
  background-color: ${({ theme }: ThemeType) => theme.colors.brand};
  &:hover {
    background-color: ${({ theme }: ThemeType) => theme.colors.active};
  }
`;

export const Button = styled.button`
  ${tw`text-white tracking-wider py-2 px-6 rounded`}
  background-color: ${({ theme }: ThemeType) => theme.colors.brand};
  &:hover {
    background-color: ${({ theme }: ThemeType) => theme.colors.active};
  }
`;

export const ButtonInverted = styled.button`
  ${tw`bg-white text-white tracking-wider py-2 px-6 rounded`}
  color: ${({ theme }: ThemeType) => theme.colors.brand};
  border: 1px solid ${({ theme }: ThemeType) => theme.colors.brand};
  &:hover {
    background-color: ${({ theme }: ThemeType) => theme.colors.light};
  }
`;

export const ButtonSkinned: React.FC<
  React.ButtonHTMLAttributes<any> & { isInverter: boolean }
> = ({ isInverter, children, ...rest }) => {
  return isInverter ? (
    <ButtonInverted {...rest}>{children}</ButtonInverted>
  ) : (
    <Button {...rest}>{children}</Button>
  );
};

export const ButtonWithIcon: React.FC<
  React.ButtonHTMLAttributes<any> & { Icon: React.ReactElement }
> = ({ Icon, children, ...rest }) => {
  return (
    <Button {...rest}>
      <div className="flex items-center">
        {Icon} <span className="mx-2">{children}</span>
      </div>
    </Button>
  );
};
