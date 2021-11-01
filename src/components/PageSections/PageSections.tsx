import type { NextPage } from "next";
import React from "react";
import Image from "next/image";
import { PageProps } from "../../server/pageProps/getPageProps";
import { FaCarAlt, FaMapMarked, FaHome } from "react-icons/fa";
import styles from "./PageSections.module.scss";

export const PageSections: NextPage<
  Pick<PageProps, "page" | "sections"> & { className?: string }
> = ({ page, sections, className }) => {
  return (
    <>
      <div className={`main ${className ?? ""} bg-white `}>
        <h1 className="py-4 h1">{page.title}</h1>
        {page?.content?.html && page?.content?.html !== "<p></p>" && (
          <section
            dangerouslySetInnerHTML={{ __html: page?.content?.html }}
          ></section>
        )}
      </div>

      {sections?.map((section, k) => {
        return (
          <div
            key={k}
            className={k % 2 === 0 ? "" : "bg-blue-100"}
            id={section.hash ?? ""}
          >
            <section
              className={`py-8 main xl:flex ${
                k % 2 == 1 && `flex-row-reverse `
              }`}
            >
              <div
                className={`xl:flex-1 ${k % 2 == 1 ? `xl:pl-4` : "xl:pr-4"}`}
              >
                <h2 className="py-4 h2">
                  {section.icon === "FaCarAlt" && (
                    <FaCarAlt
                      style={{ display: "inline" }}
                      className="py-1 mr-2"
                    />
                  )}
                  {section.icon === "FaMapMarked" && (
                    <FaMapMarked
                      style={{ display: "inline" }}
                      className="py-1 mr-2"
                    />
                  )}
                  {section.icon === "FaHome" && (
                    <FaHome
                      style={{ display: "inline" }}
                      className="py-1 mr-2"
                    />
                  )}

                  {section.title}
                </h2>
                <div
                  className={`mb-8 text-gray-700 ${styles.htmlSection}`}
                  dangerouslySetInnerHTML={{
                    __html: section?.content?.html ?? "",
                  }}
                />
              </div>

              <div className="flex-1">
                {section.media?.map((media, i) => (
                  <div className="mb-8" key={`img${k}_${i}`}>
                    <Image
                      alt={media?.alt ?? ""}
                      width={media?.width ?? 0}
                      height={media?.height ?? 0}
                      src={media.url}
                      layout="responsive"
                    />
                  </div>
                ))}
              </div>
            </section>
            <hr />
          </div>
        );
      })}
    </>
  );
};
