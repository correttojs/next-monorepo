import React from "react";
import { Links } from "../_layout/generated/codegen";
import { getPageProps } from "./getPageProps";
import { ParamsTypes } from "../_layout/types";
import { H1 } from "@packages/ui/Typography";
import { SplitSections } from "@packages/ui/Sections/SplitSections";
import { FaCarAlt, FaHome, FaMapMarked } from "react-icons/fa";
import Image from "next/image";
import { MainSection } from "@packages/ui/Sections/MainSection";

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
      <MainSection className={`mt-28 bg-white md:mt-24`}>
        <H1 className="py-4 ">{page.title}</H1>
        {page?.content?.html && page?.content?.html !== "<p></p>" && (
          <section
            dangerouslySetInnerHTML={{ __html: page?.content?.html }}
          ></section>
        )}
      </MainSection>
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
                {section.media?.map((media, i) =>
                  media.mimeType?.startsWith("image") ? (
                    <div className="mb-8" key={`img${k}_${i}`}>
                      <Image
                        alt={media?.alt ?? ""}
                        width={media?.width ?? 0}
                        height={media?.height ?? 0}
                        src={media.url}
                      />
                    </div>
                  ) : (
                    <video
                      style={{
                        width: "350px",
                        height: "400px",
                      }}
                      key={`video${k}_${i}`}
                      width="350"
                      height="400"
                      controls
                    >
                      <source src={media?.url} type={media?.mimeType ?? ""} />
                      Your browser does not support the video tag.
                    </video>
                  )
                )}
              </>
            ),
          };
        })}
      />
    </>
  );
}
