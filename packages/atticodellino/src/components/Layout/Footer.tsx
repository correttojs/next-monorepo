import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaAirbnb, FaFacebookSquare, FaMapMarker } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

import { useTranslations } from "../../hooks/useTranslations/useTranslations";
import { Contacts } from "./Contact";
import { useGlobal } from ".";

export const Footer: React.FC = () => {
  const { address, airbnbLink, facebookLink, apartment, mapLink } = useGlobal();
  const isCypress = typeof window !== "undefined" && (window as any).Cypress;
  const { locale } = useRouter();
  const t = useTranslations();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "300px 0px 300px 0px",
  });
  return (
    <div className="w-full" ref={ref} data-cy="footer">
      {(inView || isCypress) && (
        <footer className="flex flex-col flex-wrap justify-between items-center w-full text-white bg-sky-900 md:p-4">
          <div className="mx-auto max-w-screen-lg">
            <Contacts direction="row" />
            <a
              className="flex flex-row justify-center items-center m-2"
              href={mapLink ?? ""}
              target="_blank"
              rel="noreferrer"
            >
              <FaMapMarker className="inline" />{" "}
              <span className="m-1">{address}</span>
            </a>
            <div className="flex flex-row justify-center items-center m-2">
              <FaFacebookSquare />
              <a
                href={facebookLink ?? ""}
                target="_blank"
                className="self-center mr-4 ml-1"
                rel="noreferrer"
              >
                Facebook
              </a>
              <FaAirbnb />
              <a
                href={airbnbLink ?? ""}
                target="_blank"
                rel="noreferrer"
                className="self-center ml-1"
              >
                Airbnb
              </a>
            </div>
            <div className="flex flex-row justify-center m-2">
              <Link
                href="/[apartment]/privacy"
                as={`/${apartment.toLowerCase()}/privacy`}
                locale={locale}
              >
                <a data-cy="policy" className="mx-2">
                  {t("PRIVACY")}
                </a>
              </Link>
            </div>
          </div>
          <div className="flex flex-row justify-end w-full">
            <p className=" m-2">© correttoweb 2020 </p>
          </div>
        </footer>
      )}
    </div>
  );
};
