import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaAirbnb, FaFacebookSquare, FaMapMarker } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

import { useTranslations } from "../../hooks/useTranslations/useTranslations";
import { Contacts } from "./Contact";
import { useGlobal } from "./useGlobal";

export const Footer: React.FC<React.PropsWithChildren<unknown>> = () => {
  const { address, airbnbLink, facebookLink, apartment, mapLink } = useGlobal();
  const isCypress = typeof window !== "undefined" && (window as any).Cypress;
  const { locale } = useRouter();
  const t = useTranslations();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "300px 0px 300px 0px",
  });
  return (
    <div className="w-full" ref={ref} data-testid="footer">
      {(inView || isCypress) && (
        <footer className="flex w-full flex-col flex-wrap items-center justify-between bg-sky-900 text-white md:p-4">
          <div className="mx-auto max-w-screen-lg">
            <Contacts direction="row" />
            <a
              className="m-2 flex flex-row items-center justify-center"
              href={mapLink ?? ""}
              target="_blank"
              rel="noreferrer"
            >
              <FaMapMarker className="inline" />{" "}
              <span className="m-1">{address}</span>
            </a>
            <div className="m-2 flex flex-row items-center justify-center">
              <FaFacebookSquare />
              <a
                href={facebookLink ?? ""}
                target="_blank"
                className="mr-4 ml-1 self-center"
                rel="noreferrer"
              >
                Facebook
              </a>
              <FaAirbnb />
              <a
                href={airbnbLink ?? ""}
                target="_blank"
                rel="noreferrer"
                className="ml-1 self-center"
              >
                Airbnb
              </a>
            </div>
            <div className="m-2 flex flex-row justify-center">
              <Link
                href="/[apartment]/privacy"
                as={`/${apartment.toLowerCase()}/privacy`}
                locale={locale}
                data-cy="policy"
                className="mx-2"
              >
                {t("PRIVACY")}
              </Link>
            </div>
          </div>
          <div className="flex w-full flex-row justify-end">
            <p className=" m-2">© correttoweb 2020 </p>
          </div>
        </footer>
      )}
    </div>
  );
};
