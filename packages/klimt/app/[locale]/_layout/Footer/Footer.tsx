import { FaAirbnb, FaMapMarker, FaPhone } from "react-icons/fa";
import footerBg from "./footer-bg.jpeg";
import footerMobileBg from "./mobile-bg.png";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { IoMdMail, IoLogoWhatsapp } from "react-icons/io";
import { Flex } from "@packages/ui/Flex/Flex";
import { IconText } from "@packages/ui/IconText";
import { useTranslations } from "../translate";
import { ParamsTypes } from "../types";
import { LayoutQuery } from "../generated/codegen";
import styles from "./Footer.module.css";

export const Footer: React.FC<
  React.PropsWithChildren<
    ParamsTypes & {
      apartment: LayoutQuery["apartment"];
    }
  >
> = ({ apartment, params }) => {
  const translate = useTranslations();
  return (
    <div className="bg-black">
      {/* eslint-disable-next-line tailwindcss/classnames-order */}
      <div className="relative h-footer">
        <Image
          src={footerMobileBg}
          alt="footer image mobile"
          fill
          className={styles.footerMobile}
        />
        <Image
          src={footerBg}
          alt="footer image"
          className={styles.footerDesktop}
          fill
        />
      </div>
      <Flex
        as="footer"
        direction="column"
        align="center"
        justify="center"
        className={"w-full bg-black pt-4 text-white"}
        gap={4}
      >
        <a
          href={apartment?.mapLink ?? ""}
          target="_blank"
          rel="noreferrer"
          className="text-center"
        >
          <IconText Icon={FaMapMarker}>{apartment?.address}</IconText>
        </a>
        <Flex
          direction="column"
          direction-md="row"
          align="center"
          justify="center"
        >
          {/* <a
            href={`https://www.airbnb.com/rooms/${apartment?.airbnb}`}
            target="_blank"
            rel="noreferrer"
            className="mx-2"
          >
            <IconText Icon={FaAirbnb}>Airbnb</IconText>
          </a> */}

          <a
            href={`mailto:${apartment?.email}`}
            target="_blank"
            rel="noreferrer"
            className="mx-2"
          >
            <IconText Icon={IoMdMail}>{apartment?.email}</IconText>
          </a>

          <a
            href={`tel:${apartment?.phone}`}
            target="_blank"
            rel="noreferrer"
            className="mx-2"
          >
            <IconText Icon={FaPhone}>{apartment?.phone}</IconText>
          </a>
          <a
            href={`https://api.whatsapp.com/send/?phone=${encodeURIComponent(
              apartment?.phone ?? ""
            )}`}
            target="_blank"
            rel="noreferrer"
            className="mx-2"
          >
            <IconText Icon={IoLogoWhatsapp}>WhatsApp</IconText>
          </a>
        </Flex>
        <Flex direction="row" justify="center">
          <Link
            href={`${params.locale}/privacy`}
            data-cy="policy"
            className="mx-2"
          >
            {translate("PRIVACY")}
          </Link>
        </Flex>
        <Flex direction="row" justify="end" className="w-full opacity-80">
          <p>© correttoweb 2021 </p>
        </Flex>
      </Flex>
    </div>
  );
};
