import type { NextPage } from "next";
import React from "react";
import { ContentWrapper } from "../Layout/ContentWrapper";
import Image from "next/image";

import { PageProps } from "../../server/pageProps/getPageProps";

export const PageSections: NextPage<Pick<PageProps, "page" | "sections">> = ({
  page,
  sections,
}) => {
  return (
    <ContentWrapper>
      <div
        className={" "}
        dangerouslySetInnerHTML={{ __html: page?.content?.html ?? "" }}
      ></div>
      {sections?.map((section, k) => {
        return (
          <div key={k} className="my-4">
            <h2>{section.title}</h2>
            <div
              className="my-2 text-gray-700"
              dangerouslySetInnerHTML={{
                __html: section?.content?.html ?? "",
              }}
            />
            {section.media?.[0] && (
              <Image
                alt={"park"}
                width={400}
                height={600}
                src={section.media[0].url}
              />
            )}
          </div>
        );
      })}
    </ContentWrapper>
  );
};
