import Image from "next/image";
import type React from "react";
import background from "./background.jpg";
import { Card } from "./CalendarBook";

export const Hero: React.FC<{ title: string }> = ({ title }) => {
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
      <h1 className="z-10 text-6xl font-bold text-center text-white drop-shadow-lg text-shadow">
        {`Welcome to ${title}`}
      </h1>
      <div>{/* <Card /> */}</div>
    </div>
  );
};
