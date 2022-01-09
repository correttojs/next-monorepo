import Image from "next/image";
import React from "react";
import { Button } from "../Layout/Button";
import { useMounted } from "@packages/utils/useMounted";
import { useTranslations } from "@packages/utils/useTranslations";
import background from "./background.jpg";
import { H1 } from "@packages/ui/Typography";
// import { CalendarBooks } from "./CalendarBook";

export const Hero: React.FC<{ headline: string; subHeadline: string }> = ({
  subHeadline,
  headline,
}) => {
  const isMounted = useMounted();
  const translate = useTranslations();
  // const { data } = useSwrGql(
  //   ApartmentListDocument,
  //   {},
  //   { url: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT }
  // );
  // console.log(data);
  return (
    <div className={"flex flex-col justify-center h-screen bg-black"}>
      <div className={"overflow-hidden absolute w-screen h-screen"}>
        <Image
          alt="header background"
          src={background}
          layout="fill"
          objectFit="cover"
          quality={100}
          placeholder="blur"
        />
      </div>
      <div className="z-10 pt-10 xs:pt-0 pb-4 text-center text-white drop-shadow-lg text-shadow">
        <H1>{headline}</H1>
      </div>
      <div className="z-10 text-center">
        {/* <CalendarBooks /> */}
        <Button
          onClick={() => {
            window.location.hash = "home";
          }}
          className="m-4"
        >
          {translate("Hero_ReadMore")}
        </Button>
      </div>

      <h3 className="inline absolute bottom-3 left-px z-10 p-1 m-4 text-lg text-white uppercase bg-black">
        {subHeadline}
      </h3>
    </div>
  );
};
