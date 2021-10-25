import type { NextPage } from "next";
import React from "react";
import Image from "next/image";

import { PageProps } from "../../server/pageProps/getPageProps";

export const PageSections: NextPage<
  Pick<PageProps, "page" | "sections"> & { className?: string }
> = ({ page, sections, className }) => {
  return (
    <div className={`main ${className ?? ""}`}>
      {page?.content?.html && page?.content?.html !== "<p></p>" && (
        <section
          dangerouslySetInnerHTML={{ __html: page?.content?.html }}
        ></section>
      )}

      {sections?.map((section, k) => {
        return (
          <section key={k}>
            <h2 className="h2">{section.title}</h2>
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
          </section>
        );
      })}
    </div>
  );
};
