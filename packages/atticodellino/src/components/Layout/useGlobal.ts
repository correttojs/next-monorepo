import { GlobalType } from "@/graphql/_airbn.types";
import React, { useContext } from "react";

export const defaultGlobal = {
  apartment: "GARDA",
  lang: "en",
  langs: ["en", "de"],
  apartments: ["GARDA"],
  name: `L'attico del lino`,
  address: `San Nazaro st., 60, 4th floor, 37129, Verona - Italy`,
};

export const GlobalContext = React.createContext<GlobalType>(defaultGlobal);

export const theme = (global: GlobalType) => {
  return {
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
