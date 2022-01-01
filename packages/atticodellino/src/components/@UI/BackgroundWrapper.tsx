import styled from "styled-components";

import { ThemeType } from "../Layout/useGlobal";

export const BackgroundWrapper = styled.div`
  background-color: ${({ theme }: ThemeType) => theme.colors.lighter};
`;
