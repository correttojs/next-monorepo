import React from "react";
import { FaAirbnb, FaTrophy } from "react-icons/fa";
import styled from "styled-components";
import tw from "twin.macro";

import { useTranslations } from "../../hooks/useTranslations/useTranslations";
import { BackgroundWrapper } from "../@UI/BackgroundWrapper";
import { Section } from "../@UI/Section";
import { H2, P } from "../@UI/Texts";

const ImgBox = styled.div`
  img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
  }
  min-width: 170px;
  padding: 10px;
`;

export const Host: React.FC<{
  srcImage: string;
  about: string;
  reviews: number;
}> = ({ srcImage, about, reviews }) => {
  const translate = useTranslations();
  return (
    <BackgroundWrapper>
      <Section className="flex flex-col-reverse md:flex-row">
        <div>
          <H2>{translate("HOST")}</H2>
          <P>{about}</P>
          <div className="flex flex-row pt-4">
            <P className="px-4 font-bold">{reviews} reviews - </P>
            <FaTrophy size="2em" />
            <P className="px-4 font-bold">Superhost</P>
            <FaAirbnb size="2em" />
          </div>
        </div>
        <ImgBox>
          <img
            src={srcImage}
            alt="Loading"
            width="150"
            height="150"
            loading="lazy"
          />
        </ImgBox>
      </Section>
    </BackgroundWrapper>
  );
};
