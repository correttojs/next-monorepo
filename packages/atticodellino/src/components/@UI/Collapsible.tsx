import React, { useState } from "react";
import tw from "twin.macro";

import { useTranslations } from "../../hooks/useTranslations/useTranslations";
import { Section } from "./Section";

export const Collapsible: React.FC<{
  showReadMore: boolean;
}> = ({ showReadMore, children }) => {
  const translate = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Section css={tw`pt-0`}>
        {showReadMore && !isOpen && (
          <p
            role="presentation"
            css={tw`text-lg font-semibold cursor-pointer pt-4`}
            onClick={() => setIsOpen(true)}
          >
            {translate("RERAD_MORE")}
          </p>
        )}
      </Section>
      {isOpen && (
        <Section css={tw`pt-0`}>
          {children}
          <p
            role="presentation"
            css={tw`text-lg font-semibold cursor-pointer pt-4`}
            onClick={() => setIsOpen(false)}
          >
            {translate("HIDE")}
          </p>
        </Section>
      )}
    </>
  );
};
