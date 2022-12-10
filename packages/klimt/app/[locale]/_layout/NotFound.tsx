"use client";
import { H1 } from "@packages/ui/Typography";
import { useTranslations } from "./TranslationContext";

export default function NotFound() {
  const translate = useTranslations();
  return (
    <div className="main h-96 py-20">
      <H1>{translate("PAGE_NOT_FOUND")}</H1>
    </div>
  );
}
