import { ThemeType } from "../Layout/useGlobal";

import React from "react";

export const BrandBackground = () => (
  <div
    className="w-screen h-20 bg-repeat-x"
    css={`
      background-size: auto 100%;
      background-image: url(${({ theme }: ThemeType) => theme.background.jpg});

      @supports (background-image: url("image.webp")) {
        background-image: url(${({ theme }: ThemeType) =>
          theme.background.webp});
      }
    `}
  ></div>
);
