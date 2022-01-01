import { useReactQuery } from "@correttojs/next-utils/useReactQuery";
import { useRouter } from "next/router";
// Render Prop
import React, { useState } from "react";
import { FaAirbnb } from "react-icons/fa";
import { SiGooglestreetview } from "react-icons/si";
import tw from "twin.macro";

import { useTranslations } from "../../hooks/useTranslations/useTranslations";
import { Loading } from "../@UI/Loading";
import { Section } from "../@UI/Section";
import { H2 } from "../@UI/Texts";
import { FaqPage } from "../Faq";
import { Detail } from "./Detail";
import { FormRegister } from "./FormRegister";
import { ReservationDocument } from "./register.generated";
import { Sponsor } from "./Sponsor";

export const Register: React.FC = () => {
  const router = useRouter();

  const t = useTranslations();
  const [isRegistered, setIsRegistered] = useState(false);

  const { data, isLoading, error } = useReactQuery(
    ReservationDocument,
    {
      hash: router.query.hash as string,
    },
    { enabled: !!router.query.hash }
  );

  if (isLoading) {
    return (
      <div css={tw`flex justify-center`}>
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <>
        <H2 css={tw`p-4 text-center`}>{t("ERROR_RESERVATION")}</H2>
        <Sponsor />
      </>
    );
  }

  if (data?.reservation?.isExpired) {
    return (
      <>
        <H2 css={tw`p-4 text-center`}>{t("RATE_US")}</H2>
        <div css={tw`flex justify-center`}>
          <a
            href={data?.reservation?.mapLink ?? ""}
            css={tw`m-2 flex items-center cursor-pointer`}
            target="_blank"
            rel="noreferrer"
          >
            <SiGooglestreetview css={tw`inline`} /> Google
          </a>
          <a
            href={data?.reservation?.airbnbLink ?? ""}
            css={tw`m-2 flex items-center cursor-pointer`}
            target="_blank"
            rel="noreferrer"
          >
            <FaAirbnb css={tw`inline`} /> Airbnb
          </a>
        </div>
        <H2 css={tw`p-4 text-center`}>{t("NEXT_TIME")}</H2>
        <Sponsor />
      </>
    );
  }

  if (data?.reservation?.guests?.length || isRegistered) {
    return (
      <div css={tw`p-2 md:p-8 max-w-screen-lg mx-auto `}>
        {
          <>
            <Section>
              <H2 css={tw` p-4 text-center`}>
                {t("THANKYOU", {
                  data: data?.reservation?.check_in ?? "",
                })}
              </H2>
              <Detail reservation={data?.reservation} />
            </Section>
            <FaqPage />
          </>
        }
      </div>
    );
  }

  return (
    <div css={tw`p-2 md:p-8 max-w-screen-lg mx-auto `}>
      <Sponsor />
      <Section>
        <Detail reservation={data?.reservation} />
      </Section>
      <FormRegister
        onSuccess={() => setIsRegistered(true)}
        reservation={data?.reservation}
      />
    </div>
  );
};
