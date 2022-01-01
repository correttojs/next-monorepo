import { GlobalType } from "@/graphql/_airbn.types";
import React, { useContext } from "react";

export const defaultGlobal = {
  apartment: "VR",
  lang: "en",
  langs: ["en", "de"],
  apartments: ["GARDA"],
  lightColor: {
    rgb: { a: 0.2, b: 18, g: 0, r: 41 },
  },
  lighterColor: {
    rgb: { a: 0.2, b: 18, g: 0, r: 41 },
  },
  brandColor: {
    hex: "#290012",
  },
  name: `L'attico del lino`,
  address: `San Nazaro st., 60, 4th floor, 37129, Verona - Italy`,
};

export const GlobalContext = React.createContext<GlobalType>(defaultGlobal);

export const theme = (global: GlobalType) => {
  const {
    rgb: { r, g, b, a },
  } = global.lightColor as any;
  const {
    rgb: { r: r2, g: g2, b: b2, a: a2 },
  } = global.lighterColor as any;
  return {
    colors: {
      brand: global?.brandColor?.hex ?? "",
      focus: global?.brandColor?.hex ?? "",
      active: "#0e6189",
      light: `rgba(${r},${g},${b},${a})`,
      lighter: `rgba(${r2},${g2},${b2},${a2})`,
    },
    background: {
      jpg:
        global.apartment === "VR"
          ? "/images/cover.jpg"
          : "/images/cover-garda.jpg",
      webp:
        global.apartment === "VR"
          ? "/images/cover.webp"
          : "/images/cover-garda.webp",
    },
  };
};

export type ThemeType = { theme: ReturnType<typeof theme> };

export const useGlobal = () => {
  const context = useContext(GlobalContext);

  return {
    ...context,
    colors: theme(context),
  };
};
