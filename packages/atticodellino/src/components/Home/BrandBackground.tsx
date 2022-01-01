import { ThemeType } from "../Layout/useGlobal";

export const BrandBackground = () => (
  <div
    className="bg-repeat-x h-20 w-screen"
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
