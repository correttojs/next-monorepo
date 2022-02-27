import React, { useState } from "react";
import { GrClose, GrNext, GrPrevious } from "react-icons/gr";
import { MdInsertPhoto } from "react-icons/md";
import Modal from "react-modal";
import { keyframes } from "styled-components";

import classNames from "classnames";

import { useGlobal } from "../Layout";
import { MQ_MOBILE } from "../Layout";
import { BrandBackground } from "./BrandBackground";

const slidein = keyframes`
   from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Hero: React.FC<{
  photos: Array<
    | { id: number; picture: string; x_large_cover: string; caption: string }
    | undefined
  >;
}> = ({ photos }) => {
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

      <div className="flex flex-row items-center w-screen">
        <div
          data-cy="hero"
          className="grid relative gap-4 p-4 mx-auto w-full max-w-screen-xl md:p-8"
          css={`
            grid-template-columns: 50% repeat(auto-fill, minmax(25%, 1fr));
            grid-auto-flow: column;
            grid-template-rows: 15rem 15rem;
            animation: ${slidein} 1s ease-in;
            @media ${MQ_MOBILE} {
              grid-template-columns: calc(85vw);
              grid-auto-columns: calc(85vw);
              grid-template-rows: calc(45vh);
            }
          `}
        >
          {photos.slice(0, 5).map((s, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              css={`
                padding: 2px;
              `}
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
            className="absolute p-2 w-10 h-10 bg-white cursor-pointer"
            css={`
              sbottom: 3rem;
              left: 4rem;
              @media ${MQ_MOBILE} {
                bottom: 2rem;
                left: 3rem;
              }
            `}
            onClick={() => setShow(0)}
          />
        </div>
      </div>

      <Modal isOpen={show !== -1} shouldCloseOnOverlayClick={true}>
        <div className="box-border flex flex-row items-center min-w-0 max-w-full min-h-0">
          {show > 0 && (
            <GrPrevious
              data-cy="prev"
              // style={{ cursor: "pointer" }}
              // size="5rem"
              className="w-10 h-10 cursor-pointer md:w-20 md:h-20"
              onClick={() => setShow(show - 1)}
            />
          )}
          <img
            style={{
              height: "90vh",
              width: "90vw",
            }}
            alt={photos[show]?.caption}
            className="object-cover overflow-hidden flex-auto"
            src={photos[show]?.x_large_cover}
          />

          {show < photos.length - 1 && (
            <GrNext
              data-cy="next"
              // style={{ cursor: "pointer" }}
              // size="5rem"
              className="w-10 h-10 cursor-pointer md:w-20 md:h-20"
              onClick={() => setShow(show + 1)}
            />
          )}
        </div>
        <div
          css={`
            position: absolute;
            top: 5px;
            right: 5px;
          `}
        >
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
