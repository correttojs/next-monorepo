import React, { useState } from "react";
import { GrClose, GrNext, GrPrevious } from "react-icons/gr";
import { MdInsertPhoto } from "react-icons/md";
import ModalReact from "react-modal";

import { useGlobal } from "../Layout";
import { BrandBackground } from "./BrandBackground";

import classNames from "classnames";

import styles from "./Home.module.css";

const Modal =
  ModalReact as any as React.JSXElementConstructor<ModalReact.Props>;

export const Hero: React.FC<
  React.PropsWithChildren<{
    photos: Array<
      | { id: number; picture: string; x_large_cover: string; caption: string }
      | undefined
    >;
  }>
> = ({ photos }) => {
  const [show, setShow] = useState(-1);
  const global = useGlobal();

  if (global.apartment === "VR") {
    photos = [
      photos.find((p) => p?.id === 406200537),
      photos.find((p) => p?.id === 406200123),
      ...photos.filter(
        (p) => p?.id !== 406200537 && p?.id !== 278532343 && p?.id !== 406200123
      ),
    ];
  }

  return (
    <>
      <BrandBackground />

      <div className="flex w-screen flex-row items-center">
        <div
          data-cy="hero"
          className={classNames(
            styles["gallery-grid"],
            "grid relative gap-4 p-4 mx-auto w-full max-w-screen-xl md:p-8"
          )}
        >
          {photos.slice(0, 5).map((s, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className={classNames([
                "object-cover w-full h-full cursor-pointer bg-white",
                i === 0 && `md:row-span-2 rounded-l-xl `,
                i === 3 && `rounded-tr-xl`,
                i === 4 && `rounded-br-xl`,
              ])}
              key={i}
              alt={s?.caption}
              src={s?.picture}
              loading="lazy"
              onClick={() => setShow(i)}
              height={500}
              width={650}
              data-testid="img-gallery"
            />
          ))}
          <MdInsertPhoto
            className={classNames(
              "absolute p-2 w-10 h-10 bg-white cursor-pointer",
              styles["gallery-icon"]
            )}
            onClick={() => setShow(0)}
          />
        </div>
      </div>

      <Modal isOpen={show !== -1} shouldCloseOnOverlayClick={true}>
        <div className="box-border flex min-h-0 min-w-0 max-w-full flex-row items-center">
          {show > 0 && (
            <GrPrevious
              data-cy="prev"
              // style={{ cursor: "pointer" }}
              // size="5rem"
              className="h-10 w-10 cursor-pointer md:h-20 md:w-20"
              onClick={() => setShow(show - 1)}
            />
          )}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            style={{
              height: "90vh",
              width: "90vw",
            }}
            alt={photos[show]?.caption}
            className="flex-auto overflow-hidden object-cover"
            src={photos[show]?.x_large_cover}
          />

          {show < photos.length - 1 && (
            <GrNext
              data-cy="next"
              // style={{ cursor: "pointer" }}
              // size="5rem"
              className="h-10 w-10 cursor-pointer md:h-20 md:w-20"
              onClick={() => setShow(show + 1)}
            />
          )}
        </div>
        <div className={styles["gallery-close-icon"]}>
          <GrClose
            data-cy="close"
            style={{ cursor: "pointer" }}
            size="2rem"
            onClick={() => setShow(-1)}
          />
        </div>
      </Modal>
    </>
  );
};
