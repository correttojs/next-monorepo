import Image from "next/image";
import React from "react";
import background from "./background.jpg";
import { H1 } from "@packages/ui/Typography";
import { ReadMore } from "./ReadMore";
// import { CalendarBooks } from "./CalendarBook";

export const Hero: React.FC<
  React.PropsWithChildren<{ headline: string; subHeadline: string }>
> = ({ subHeadline, headline }) => {
  // const { data } = useSwrGql(
  //   ApartmentListDocument,
  //   {},
  //   { url: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT }
  // );
  // console.log(data);
  return (
    <div className={"flex h-screen flex-col justify-center bg-black"}>
      <div className={"absolute h-screen w-screen overflow-hidden"}>
        <Image
          alt="header background"
          src={background}
          style={{ objectFit: "cover" }}
          quality={100}
          placeholder="blur"
          fill
        />
      </div>
      <div className="xs:pt-0 text-shadow z-10 pt-10 pb-4 text-center text-white drop-shadow-lg">
        <H1>{headline}</H1>
      </div>
      <div className="z-10 text-center">
        {/* <CalendarBooks /> */}
        <ReadMore />
      </div>

      <h3 className="absolute bottom-3 left-px z-10 m-4 inline bg-black p-1 text-lg uppercase text-white">
        {subHeadline}
      </h3>
    </div>
  );
};
