import { GlobalType } from "@/graphql/_airbn.types";
import React, { useContext } from "react";

export const GlobalContext = React.createContext<GlobalType | null>(null);

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("Missing Global Context");
  }
  return context;
};
