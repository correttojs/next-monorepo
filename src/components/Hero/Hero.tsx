import Image from "next/image";
import React from "react";
import { useMounted } from "../../hooks/useMounted";
import background from "./background.jpg";
import { Card } from "./CalendarBook";

export const Hero: React.FC<{ title: string }> = ({ title }) => {
  const isMounted = useMounted();

  return (
    <div className={"flex flex-col justify-center h-screen bg-black"}>
      <div className={"overflow-hidden absolute w-screen h-screen"}>
        <Image
          alt="Candor"
          src={background}
          layout="fill"
          objectFit="cover"
          quality={100}
          placeholder="blur"
        />
      </div>
      <div className="z-10 text-center text-white drop-shadow-lg text-shadow">
        <h3
          className={`m-4 text-xl uppercase transform transition-transform duration-500 ${
            isMounted ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          Loc. Pre - Garda lake - Verona
        </h3>
        <h1 className="text-6xl font-bold ">{`Welcome to Residence ${title}`}</h1>
        <button
          className={`m-8 text-l  transform transition-transform duration-500 ${
            isMounted ? "translate-y-0" : "translate-y-full"
          } border border-1 border-white px-6 py-2`}
        >
          Photo gallery...
        </button>
      </div>

      <div>{/* <Card /> */}</div>
    </div>
  );
};
