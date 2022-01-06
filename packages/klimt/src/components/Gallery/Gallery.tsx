import { pdp_listing_detail } from "../../server/pageProps/airbnb.types";
import Image from "next/image";
import styles from "./Gallery.module.scss";
import { FaPhotoVideo } from "react-icons/fa";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useState } from "react";

export const Gallery: React.FC<{
  photos: pdp_listing_detail["pdp_listing_detail"]["photos"];
}> = ({ photos }) => {
  const [showIndex, setShow] = useState(-1);
  const nextIndex = (showIndex + 1) % photos.length;
  const prevIndex = (showIndex + photos.length - 1) % photos.length;
  return (
    <div className="bg-black">
      <section className="relative gap-4 py-10 cursor-pointer md:grid md:grid-cols-4 main">
        {photos.slice(0, 5).map((photo, i) => {
          let className = "h-full";
          if (i === 0) {
            className += ` ${styles["first-image"]} md:row-span-2 md:col-span-2 `;
          } else if (i === 2) {
            className += ` hidden md:block ${styles["top-right"]} `;
          } else if (i === 4) {
            className += ` hidden md:block ${styles["bottom-right"]} `;
          } else {
            className += ` hidden md:block  `;
          }
          return (
            <div className={className} key={`p${i}`} onClick={() => setShow(0)}>
              <Image
                src={photo.xx_large ?? ""}
                width={500}
                height={500 / 1.2}
                alt={photo.caption ?? ""}
                objectFit="cover"
                layout="responsive"
              />
            </div>
          );
        })}
        <FaPhotoVideo
          className={`absolute h-12 w-12 p-2 cursor-pointer  text-white border border-white ${styles["gallery-icon"]}`}
          onClick={() => setShow(0)}
        />

        {showIndex !== -1 && (
          <Lightbox
            mainSrc={photos[showIndex].xx_large}
            nextSrc={photos[nextIndex].xx_large}
            prevSrc={photos[prevIndex].xx_large}
            onCloseRequest={() => setShow(-1)}
            onMovePrevRequest={() => setShow(prevIndex)}
            onMoveNextRequest={() => setShow(nextIndex)}
          />
        )}
      </section>
    </div>
  );
};
