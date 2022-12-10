import { Button } from "@packages/ui/Button";
import React from "react";

import { useTranslations } from "../../hooks/useTranslations/useTranslations";

export const FormError = () => {
  const t = useTranslations();
  return (
    <div
      role="presentation"
      className="flex flex-col items-center p-4"
      onClick={() => window.location.reload()}
    >
      <p>{t("ERROR")}</p>
      <Button color="sky" type="submit">
        Ok
      </Button>
    </div>
  );
};
