import tw from "twin.macro";

import { ThemeType } from "../Layout/useGlobal";

export const BrandBackground = () => (
  <div
    css={`
      ${tw`bg-repeat-x h-20 w-screen`}

      background-size: auto 100%;
      background-image: url(${({ theme }: ThemeType) => theme.background.jpg});

      @supports (background-image: url("image.webp")) {
        background-image: url(${({ theme }: ThemeType) =>
          theme.background.webp});
      }
    `}
  ></div>
);
