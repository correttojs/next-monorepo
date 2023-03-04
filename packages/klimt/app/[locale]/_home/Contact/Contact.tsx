"use client";

import { FaMapMarker, FaAirbnb, FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IconText } from "@packages/ui/IconText/IconText";
import { useTranslations } from "../../_layout/TranslationContext";
import { useForm } from "react-hook-form";
import { useSwrGql } from "@packages/utils/useSwrGql";

import { useState } from "react";
import { AnchorPointer } from "@packages/ui/AnchorPointer";
import { H2 } from "@packages/ui/Typography";
import { Button } from "@packages/ui/Button";

import { PageQuery } from "../../_layout/generated/codegen";
import { SendMessage } from "packages/klimt/app/sendMessage/route";
import { sendMessage } from "./sendMessage";

const Error: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => (
  <p className="text-xs italic text-red-500">{children}</p>
);

export const Contact: React.FC<
  React.PropsWithChildren<{
    apartment: PageQuery["apartment"];
  }>
> = ({ apartment }) => {
  const translate = useTranslations();
  const className =
    "py-3 px-3 w-full border border-gray-400 placeholder-gray-500 text-gray-800 focus:outline-none";
  const [submitState, setSubmitState] = useState(-1);
  const onSubmit = async (data: SendMessage) => {
    try {
      const res = await sendMessage(data);
      if (res) {
        setSubmitState(1);
      }
    } catch (e) {
      setSubmitState(0);
    }
  };
  useSwrGql;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SendMessage>();
  return (
    <div className="py-10  ">
      <AnchorPointer id="contacts" />
      <section className="main">
        <H2 className="pb-8 text-center">{translate("CONTACTS")}</H2>
        <div className="md:grid md:grid-cols-2">
          <div className="pb-8 leading-8">
            <a
              href={`mailto:${apartment?.email}`}
              target="_blank"
              rel="noreferrer"
            >
              <IconText Icon={IoMdMail}>{apartment?.email}</IconText>
            </a>

            <a
              href={`tel:${apartment?.phone}`}
              target="_blank"
              rel="noreferrer"
            >
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
          <form className="rounded bg-white" onSubmit={handleSubmit(onSubmit)}>
            {submitState !== 1 && (
              <>
                <div className="gap-4 md:grid md:grid-cols-2">
                  <div className="mb-4">
                    <input
                      className={className}
                      id="name"
                      type="text"
                      placeholder={translate("INPUT_NAME")}
                      {...register("name", { required: true, minLength: 3 })}
                    />
                    {errors.name && (
                      <Error>{translate("INPUT_ERROR_NAME")}</Error>
                    )}
                  </div>
                  <div className="mb-6">
                    <input
                      className={className}
                      id="email"
                      type="text"
                      placeholder={translate("INPUT_EMAIL")}
                      {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                      })}
                    />
                    {errors.email && (
                      <Error>{translate("INPUT_ERROR_EMAIL")}</Error>
                    )}
                  </div>
                </div>
                <div className="mb-4">
                  <textarea
                    className={className}
                    id="message"
                    placeholder={translate("INPUT_MESSAGE")}
                    {...register("message", { required: true })}
                  />
                  {errors.message && (
                    <Error>{translate("INPUT_ERROR_MESSAGE")}</Error>
                  )}
                </div>
                <div className="flex items-center justify-end">
                  <Button color="black" type="submit">
                    {translate("INPUT_SEND")}
                  </Button>
                </div>
              </>
            )}
            {submitState === 0 && (
              <Error>{translate("INPUT_ERROR_SUBMIT")}</Error>
            )}
            {submitState === 1 && translate("INPUT_STATUS_OK")}
          </form>
        </div>
      </section>
    </div>
  );
};
