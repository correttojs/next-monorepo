import { PageQuery } from "../../generated/codegen";
import { FaMapMarker, FaAirbnb, FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IconText } from "../IconText/IconText";
import { useTranslations } from "../../hooks/useTranslations";

const Error: React.FC = ({ children }) => (
  <p className="text-xs italic text-red-500">{children}</p>
);

export const Contact: React.FC<{
  apartment: PageQuery["apartment"];
}> = ({ apartment }) => {
  const translate = useTranslations();
  const className =
    "py-3 px-3 w-full border border-gray-400 placeholder-gray-500 text-gray-800 focus:outline-none";

  return (
    <div className="py-10  ">
      <section className="  main">
        <h2 className="pb-8 text-center h2">{translate("CONTACTS")}</h2>
        <div className="md:grid md:grid-cols-2 main">
          <div className="leading-8">
            <a href={apartment?.mapLink ?? ""} target="_blank" rel="noreferrer">
              <IconText Icon={IoMdMail}>{apartment?.email}</IconText>
            </a>

            <a href={apartment?.mapLink ?? ""} target="_blank" rel="noreferrer">
              <IconText Icon={FaPhone}>{apartment?.phone}</IconText>
            </a>

            <a
              href={`https://www.airbnb.com/rooms/${apartment?.airbnb}`}
              target="_blank"
              rel="noreferrer"
            >
              <IconText Icon={FaAirbnb}>Airbnb</IconText>
            </a>
            <a href={apartment?.mapLink ?? ""} target="_blank" rel="noreferrer">
              <IconText Icon={FaMapMarker}>{apartment?.address}</IconText>
            </a>
          </div>
          <form className=" bg-white rounded main">
            <div className="md:grid md:grid-cols-2 gap-4 main">
              <div className="mb-4">
                <input
                  className={className}
                  id="username"
                  type="text"
                  placeholder={translate("INPUT_NAME")}
                />
                <Error>{translate("INPUT_ERROR_NAME")}</Error>
              </div>
              <div className="mb-6">
                <input
                  className={className}
                  id="email"
                  type="email"
                  placeholder={translate("INPUT_EMAIL")}
                />
                <Error>{translate("INPUT_ERROR_EMAIL")}</Error>
              </div>
            </div>

            <div className="mb-4">
              <textarea
                className={className}
                id="username"
                placeholder={translate("INPUT_MESSAGE")}
              />
              <Error>{translate("INPUT_ERROR_MESSAGE")}</Error>
            </div>
            <div className="flex justify-end items-center">
              <button className="button" type="button">
                {translate("INPUT_SEND")}
              </button>
            </div>
            <Error>{translate("INPUT_ERROR_SUBMIT")}</Error>
          </form>
        </div>
      </section>
    </div>
  );
};
