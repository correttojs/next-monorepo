import type { NextPage } from "next";
import React from "react";
import Image from "next/image";
import { PageProps } from "../../server/pageProps/getPageProps";

export const PageSections: NextPage<
  Pick<PageProps, "page" | "sections"> & { className?: string }
> = ({ page, sections, className }) => {
  return (
    <div className={`main ${className ?? ""}`}>
      <h1 className="py-4 h1">{page.title}</h1>
      {page?.content?.html && page?.content?.html !== "<p></p>" && (
        <section
          dangerouslySetInnerHTML={{ __html: page?.content?.html }}
        ></section>
      )}

      {sections?.map((section, k) => {
        return (
          <section key={k} className="p-0 my-12 bg-gray-200 shadow-xl">
            {section.media?.[0] && (
              <Image
                alt={section.media?.[0]?.alt ?? ""}
                width={section.media?.[0]?.width ?? 0}
                height={section.media?.[0]?.height ?? 0}
                src={section.media[0].url}
                // layout="responsive"
              />
            )}
            <h2 className="p-4 xl:p-8 h2">{section.title}</h2>
            <div
              className="p-4 xl:p-8 text-gray-700"
              dangerouslySetInnerHTML={{
                __html: section?.content?.html ?? "",
              }}
            />
          </section>
        );
      })}
    </div>
  );
};
