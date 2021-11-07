import { pdp_listing_detail } from "../../server/pageProps/airbnb.types";
import Image from "next/image";
import styles from "./Gallery.module.scss";
import { FaPhotoVideo } from "react-icons/fa";

export const Gallery: React.FC<{
  photos: pdp_listing_detail["pdp_listing_detail"]["photos"];
}> = ({ photos }) => {
  return (
    <section
      className={`grid relative grid-cols-2   md:grid-cols-4 gap-4  ${styles.galleryGrid}`}
    >
      {photos.slice(0, 5).map((photo, i) => {
        let className = "h-full";
        if (i === 0) {
          className += ` ${styles.firstImage} md:row-span-2 md:col-span-2 `;
        } else if (i === 2) {
          className += ` hidden md:block ${styles.topRight} `;
        } else if (i === 4) {
          className += ` hidden md:block ${styles.bottomRight} `;
        } else if (i === 3) {
          className += ` hidden md:block  `;
        }
        return (
          <div className={className} key={`p${i}`}>
            <Image
              src={photo.xx_large ?? ""}
              width={1000}
              height={1000 / 1.2}
              alt={photo.caption ?? ""}
              objectFit="cover"
              layout="responsive"
            />
          </div>
        );
      })}
      <FaPhotoVideo
        className={`absolute h-12 w-12 p-2 cursor-pointer  text-white border border-white ${styles.galleryIcon}`}

        // onClick={() => setShow(0)}
      />
    </section>
  );
};
