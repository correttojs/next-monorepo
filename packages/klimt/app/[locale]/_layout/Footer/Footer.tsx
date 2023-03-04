"use client";
import { FaAirbnb, FaMapMarker, FaPhone } from "react-icons/fa";
import footerBg from "./footer-bg.jpeg";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { IoMdMail } from "react-icons/io";
import { Flex } from "@packages/ui/Flex/Flex";
import { IconText } from "@packages/ui/IconText";
import { useTranslations } from "../TranslationContext";
import { ParamsTypes } from "../types";
import { LayoutQuery } from "../generated/codegen";

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
      <div className="relative h-128">
        <Image
          src={footerBg}
          alt="footer image"
          fill
          sizes="(min-width: 66em) 33vw,
  (min-width: 44em) 50vw,
  100vw"
        />
      </div>
      <Flex
        as="footer"
        direction="column"
        align="center"
        justify="center"
        className={"w-full bg-black pt-4 text-white"}
      >
        <a href={apartment?.mapLink ?? ""} target="_blank" rel="noreferrer">
          <IconText Icon={FaMapMarker}>{apartment?.address}</IconText>
        </a>
        <Flex direction="row" align="center" justify="center" className={`m-2`}>
          <a
            href={`https://www.airbnb.com/rooms/${apartment?.airbnb}`}
            target="_blank"
            rel="noreferrer"
            className="mx-2"
          >
            <IconText Icon={FaAirbnb}>Airbnb</IconText>
          </a>

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
        </Flex>
        <Flex direction="row" justify="center" className="m-2">
          <Link
            href={`${params.locale}/privacy`}
            data-cy="policy"
            className="mx-2"
          >
            {translate("PRIVACY")}
          </Link>
        </Flex>
        <Flex direction="row" justify="end" className="w-full opacity-80">
          <p className=" m-2">© correttoweb 2021 </p>
        </Flex>
      </Flex>
    </div>
  );
};
