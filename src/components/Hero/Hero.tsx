import Image from "next/image";
import type React from "react";
import styles from "./Hero.module.css";
import background from "./background.jpg";
import { Card } from "./CalendarBook";
import { useReactQuery } from "@correttojs/next-utils/useReactQuery";
import { ApartmentListDocument } from "../../generated/codegen";

export const Hero: React.FC<{ title: string }> = ({ title }) => {
  const { data } = useReactQuery(
    ApartmentListDocument,
    {},
    {
      url: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? "",
      enabled: typeof window !== "undefined",
    }
  );
  return (
    <div className={"flex justify-center flex-col h-screen"}>
      <div className={styles.bgWrap}>
        <Image
          alt="Candor"
          src={background}
          layout="fill"
          objectFit="cover"
          quality={100}
          placeholder="blur"
        />
      </div>
      <h1 className="text-6xl text-center text-white">{title}</h1>
      <div>
        <Card />
        {data?.apartments.map((apartment, k) => (
          <p key={k} className="text-white">
            {apartment.name}
          </p>
        ))}
      </div>
    </div>
  );
};
