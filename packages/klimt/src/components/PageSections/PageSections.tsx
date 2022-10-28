import type { NextPage } from "next";
import React from "react";
import Image from "next/image";
import { PageProps } from "../../server/pageProps/getPageProps";
import { FaCarAlt, FaMapMarked, FaHome } from "react-icons/fa";
import { SplitSections } from "@packages/ui/Sections";
import { H1 } from "@packages/ui/Typography";

export const PageSections: NextPage<
  Pick<PageProps, "page" | "sections"> & { className?: string }
> = ({ page, sections, className }) => {
  return (
    <>
      <div className={`main ${className ?? ""} bg-white `}>
        <H1 className="py-4 ">{page.title}</H1>
        {page?.content?.html && page?.content?.html !== "<p></p>" && (
          <section
            dangerouslySetInnerHTML={{ __html: page?.content?.html }}
          ></section>
        )}
      </div>
      <SplitSections
        sections={sections?.map((section, k) => {
          return {
            title: section.title,
            hash: section.hash,
            content: section.content,
            Icon:
              section.icon === "FaCarAlt"
                ? FaCarAlt
                : section.icon === "FaMapMarked"
                ? FaMapMarked
                : section.icon === "FaHome"
                ? FaHome
                : null,
            Side: (
              <>
                {section.media?.map((media, i) => (
                  <div className="mb-8" key={`img${k}_${i}`}>
                    <Image
                      alt={media?.alt ?? ""}
                      width={media?.width ?? 0}
                      height={media?.height ?? 0}
                      src={media.url}
                    />
                  </div>
                ))}
              </>
            ),
          };
        })}
      />
    </>
  );
};
