import { MainSection } from "@packages/ui/Sections";
import React, { useState } from "react";

export const Collapsible: React.FC<React.PropsWithChildren<{
  showReadMore: boolean;
  text: {
    more: string;
    hide: string;
  };
}>> = ({ showReadMore, children, text }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <MainSection className="p-4 pt-0 md:p-8">
        {showReadMore && !isOpen && (
          <p
            role="presentation"
            className="pt-4 text-lg font-semibold cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            {text.more}
          </p>
        )}
      </MainSection>
      {isOpen && (
        <MainSection className="p-4 pt-0 md:p-8">
          {children}
          <p
            role="presentation"
            className="pt-4 text-lg font-semibold cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            {text.hide}
          </p>
        </MainSection>
      )}
    </>
  );
};
