"use client";

import Image from "next/image";
import styles from "./Gallery.module.css";
import { FaPhotoVideo } from "react-icons/fa";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useMemo, useState, useTransition } from "react";
import classNames from "classnames";
import { MainSection } from "@packages/ui/Sections/MainSection";
import {
  GalleryQuery,
  PhotoLabels,
} from "app/[locale]/_layout/generated/codegen";

export const Gallery: React.FC<
  React.PropsWithChildren<{
    photos: GalleryQuery["assets"];
  }>
> = ({ photos }) => {
  const [isPending, startTransition] = useTransition();
  const [showIndex, setShow] = useState(-1);
  const openGallery = (state: number) => {
    startTransition(() => {
      setShow(state);
    });
  };
  const sortedPhotos = useMemo(() => {
    return photos.sort((a, b) => {
      if (a.label === PhotoLabels.GalleryCover) {
        return -1;
      }
      if (b.label === PhotoLabels.GalleryCover) {
        return 1;
      }
      if (a.label === PhotoLabels.GalleryCoversSmall) {
        return -1;
      }
      if (b.label === PhotoLabels.GalleryCoversSmall) {
        return 1;
      }
      return 0;
    });
  }, [photos]);
  const nextIndex = (showIndex + 1) % sortedPhotos.length;
  const prevIndex = (showIndex + sortedPhotos.length - 1) % photos.length;
  return (
    <div className="bg-black">
      <MainSection className="relative cursor-pointer gap-4 py-10 md:grid md:grid-cols-4">
        {sortedPhotos.slice(0, 5).map((photo, i) => {
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
                src={photo.url ?? ""}
                width={500}
                height={500 / 1.2}
                alt={photo.alt ?? ""}
                className={classNames(className, "object-cover")}
              />
            </div>
          );
        })}
        <FaPhotoVideo
          className={`absolute h-12 w-12 cursor-pointer border  border-white p-2 text-white ${styles["gallery-icon"]}`}
          onClick={() => openGallery(0)}
        />

        {showIndex !== -1 && (
          <Lightbox
            mainSrc={sortedPhotos[showIndex].url}
            nextSrc={sortedPhotos[nextIndex].url}
            prevSrc={sortedPhotos[prevIndex].url}
            onCloseRequest={() => openGallery(-1)}
            onMovePrevRequest={() => openGallery(prevIndex)}
            onMoveNextRequest={() => openGallery(nextIndex)}
          />
        )}
      </MainSection>
    </div>
  );
};
