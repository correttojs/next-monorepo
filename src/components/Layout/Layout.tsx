import Head from "next/head";
import React from "react";

import { FaAirbnb, FaMapMarker } from "react-icons/fa";
import { PageQuery } from "../../generated/codegen";
import { Header } from "../Header/Header";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslations } from "../../hooks/useTranslations";

export const Layout: React.FC<{
  apartment: PageQuery["apartment"];
  links: PageQuery["navigations"];
  isTransparent?: boolean;
}> = ({ children, apartment, links, isTransparent = false }) => {
  const router = useRouter();

  const items = [
    ...links
      .filter((i) => i.link !== "home")
      .map((item) => ({
        title: item.title,
        href: `/${item.link}`,
        isActive: router.pathname.replace("/", "") === item.link,
      })),
    {
      title: "EN",
      href: "/",
      isActive: false,
      lang: "en",
    },
    {
      title: "DE",
      href: "/",
      isActive: false,
      lang: "de",
    },
  ];

  const translate = useTranslations();
  return (
    <div>
      <Head>
        <title>{apartment?.name}</title>
      </Head>
      <Header isTransparent={isTransparent} title={"Home"} items={items} />

      {children}
      <footer
        className={
          "flex flex-col justify-center justify-items-center items-center pt-4 w-full text-white bg-black"
        }
      >
        <a
          className={`flex flex-row justify-center m-2 items-center`}
          href={apartment?.mapLink ?? ""}
          target="_blank"
          rel="noreferrer"
        >
          <FaMapMarker className={`inline`} />{" "}
          <span className={`m-1`}>{apartment?.address}</span>
        </a>
        <div className={`flex flex-row justify-center m-2 items-center`}>
          <FaAirbnb />

          <a
            href={
              "https://www.airbnb.com/rooms/38696794?source_impression_id=p3_1585675864_NaxMK%2FnDj%2FoESRY%2F"
            }
            target="_blank"
            rel="noreferrer"
            className={`self-center  ml-1`}
          >
            Airbnb
          </a>
        </div>
        <div className="flex flex-row justify-center m-2">
          <Link href="/privacy">
            <a data-cy="policy" css="mx-2">
              {translate("PRIVACY")}
            </a>
          </Link>
        </div>
        <div className="flex flex-row justify-end w-full opacity-80">
          <p className=" m-2">© correttoweb 2021 </p>
        </div>
      </footer>
    </div>
  );
};
