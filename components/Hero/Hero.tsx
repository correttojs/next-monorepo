import Image from "next/image";
import type React from "react";
import styles from "./Hero.module.css";
import background from "./background.jpg";

export const Hero: React.FC<{ title: string }> = ({ title }) => {
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
    </div>
  );
};
