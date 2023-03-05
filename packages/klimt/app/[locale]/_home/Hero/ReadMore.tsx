"use client";

import React from "react";
import { Button } from "@packages/ui/Button";
import { useTranslations } from "../../_layout/translate";

export const ReadMore: React.FC = () => {
  const translate = useTranslations();

  return (
    <Button
      color="black"
      onClick={() => {
        window.location.hash = "home";
      }}
      className="m-4"
    >
      {translate("Hero_ReadMore")}
    </Button>
  );
};
