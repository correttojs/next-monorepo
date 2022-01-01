import { FaAirbnb, FaMapMarker, FaPhone } from "react-icons/fa";
import footerBg from "./footer-bg.jpeg";
import Link from "next/link";
import Image from "next/image";
import { PageQuery } from "../../generated/codegen";
import { useTranslations } from "../../hooks/useTranslations";
import React from "react";
import { IconText } from "../IconText/IconText";
import { IoMdMail } from "react-icons/io";

export const Footer: React.FC<{
  apartment: PageQuery["apartment"];
}> = ({ apartment }) => {
  const translate = useTranslations();
  return (
    <div className="bg-black">
      <Image src={footerBg} height="600" objectFit="cover" alt="footer image" />
      <footer
        className={
          "flex flex-col justify-center justify-items-center items-center pt-4 w-full text-white bg-black"
        }
      >
        <a href={apartment?.mapLink ?? ""} target="_blank" rel="noreferrer">
          <IconText Icon={FaMapMarker}>{apartment?.address}</IconText>
        </a>
        <div className={`flex flex-row justify-center m-2 items-center`}>
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
        </div>
        <div className="flex flex-row justify-center m-2">
          <Link href="/privacy">
            <a data-cy="policy" className="mx-2">
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
