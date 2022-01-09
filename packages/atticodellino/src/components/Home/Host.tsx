import React from "react";
import { FaAirbnb, FaTrophy } from "react-icons/fa";

import { useTranslations } from "../../hooks/useTranslations/useTranslations";
import { H2, P } from "@packages/ui/Typography";
import { MainSection } from "@packages/ui/Sections";

import Image from "next/image";

export const Host: React.FC<{
  srcImage: string;
  about: string;
  reviews: number;
}> = ({ srcImage, about, reviews }) => {
  const translate = useTranslations();
  return (
    <div className="bg-sky-100">
      <MainSection className="flex flex-col-reverse p-4 md:flex-row md:p-8">
        <div className="flex-1">
          <H2>{translate("HOST")}</H2>
          <P>{about}</P>
          <div className="flex flex-row pt-4">
            <P className="px-4 font-bold">{reviews} reviews - </P>
            <FaTrophy size="2em" />
            <P className="px-4 font-bold">Superhost</P>
            <FaAirbnb size="2em" />
          </div>
        </div>
        <div className="p-2  ">
          <Image
            src={srcImage}
            alt="Lino"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
      </MainSection>
    </div>
  );
};
