import React from "react";
import { Links } from "../_layout/generated/codegen";
import { getPageProps } from "./getPageProps";
import { ParamsTypes } from "../_layout/types";
import { H1 } from "@packages/ui/Typography";
import { SplitSections } from "@packages/ui/Sections/SplitSections";
import { FaCarAlt, FaHome, FaMapMarked } from "react-icons/fa";
import Image from "next/image";

export async function generateStaticParams({ params }: ParamsTypes) {
  return [
    {
      page: Links.Howto,
    },
    {
      page: Links.Privacy,
    },
    {
      page: Links.Todo,
    },
    {
      page: Links.Rules,
    },
  ];
}

export default async function Page({ params }: ParamsTypes<{ page: Links }>) {
  const { page, sections } = await getPageProps({
    pageType: params.page,
    locale: params.locale,
  });
  return (
    <>
      <div className={`main p-header bg-white `}>
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
}
