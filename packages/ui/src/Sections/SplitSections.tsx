import React, { ReactElement } from "react";
import { FaLink } from "react-icons/fa";
import styles from "./SplitSections.module.scss";
import { AnchorPointer } from "@packages/ui/AnchorPointer";
import { IconType } from "react-icons";
import { H2 } from "@packages/ui/Typography";
import classNames from "classnames";
import { MainSection } from "@packages/ui/Sections/MainSection";

type SectionType =
  | {
      title: string;
      hash?: string | null;
      content?: { html?: string | null } | null;
      Icon?: IconType | null;
      Side: ReactElement;
    }
  | null
  | undefined;

type PropTypes = {
  alternateBackground?: string;
  sections: SectionType[];
};

export const SplitSections: React.FC<PropTypes> = ({
  sections,
  alternateBackground = "bg-gray-200",
}) => {
  return (
    <>
      {sections?.map((section, k) => {
        if (!section) {
          return null;
        }
        return (
          <div key={k} className={k % 2 === 1 ? alternateBackground : ""}>
            <MainSection
              className={classNames(
                "py-8 xl:flex",
                k % 2 == 1 && "flex-row-reverse"
              )}
            >
              <div
                className={classNames(
                  "xl:flex-1",
                  k % 2 == 1 ? `xl:pl-4` : "xl:pr-4"
                )}
              >
                <H2 className="py-4">
                  {section.hash ? (
                    <>
                      <AnchorPointer id={section.hash ?? ""} />

                      <a
                        href={`#${section.hash}`}
                        className={styles["copy-anchor"]}
                      >
                        {section.Icon && (
                          <section.Icon
                            style={{ display: "inline" }}
                            className="py-1 mr-2"
                          />
                        )}

                        {section.title}
                        <FaLink className={`py-1 ml-2 ${styles.permalink}`} />
                      </a>
                    </>
                  ) : (
                    <>
                      {section.Icon && (
                        <section.Icon
                          style={{ display: "inline" }}
                          className="py-1 mr-2"
                        />
                      )}

                      {section.title}
                    </>
                  )}
                </H2>
                <div
                  className={`mb-8 text-gray-700 ${styles["html-section"]}`}
                  dangerouslySetInnerHTML={{
                    __html: section?.content?.html ?? "",
                  }}
                />
              </div>

              <div className="flex-1">{section.Side}</div>
            </MainSection>
            <hr />
          </div>
        );
      })}
    </>
  );
};
