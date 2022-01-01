import React from "react";
import tw from "twin.macro";

import { useTranslations } from "../../hooks/useTranslations/useTranslations";
import { Button } from "./Buttons";

export const FormError = () => {
  const t = useTranslations();
  return (
    <div
      role="presentation"
      className="flex flex-col items-center p-4"
      onClick={() => window.location.reload()}
    >
      <p>{t("ERROR")}</p>
      <Button type="submit">Ok</Button>
    </div>
  );
};
