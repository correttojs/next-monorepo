import { FaAirbnb, FaMapMarker } from "react-icons/fa";

import Link from "next/link";
import { PageQuery } from "../../generated/codegen";
import { useTranslations } from "../../hooks/useTranslations";

export const Footer: React.FC<{
  apartment: PageQuery["apartment"];
}> = ({ apartment }) => {
  const translate = useTranslations();
  return (
    <footer
      className={
        "flex flex-col justify-center justify-items-center items-center pt-4 w-full text-white bg-black"
      }
    >
      <a
        className={`flex flex-row justify-center m-2 items-center`}
        href={apartment?.mapLink ?? ""}
        target="_blank"
        rel="noreferrer"
      >
        <FaMapMarker className={`inline`} />{" "}
        <span className={`m-1`}>{apartment?.address}</span>
      </a>
      <div className={`flex flex-row justify-center m-2 items-center`}>
        <FaAirbnb />

        <a
          href={
            "https://www.airbnb.com/rooms/38696794?source_impression_id=p3_1585675864_NaxMK%2FnDj%2FoESRY%2F"
          }
          target="_blank"
          rel="noreferrer"
          className={`self-center  ml-1`}
        >
          Airbnb
        </a>
      </div>
      <div className="flex flex-row justify-center m-2">
        <Link href="/privacy">
          <a data-cy="policy" css="mx-2">
            {translate("PRIVACY")}
          </a>
        </Link>
      </div>
      <div className="flex flex-row justify-end w-full opacity-80">
        <p className=" m-2">© correttoweb 2021 </p>
      </div>
    </footer>
  );
};
