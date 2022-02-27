import {
  useReactMutation,
  useReactQuery,
} from "@correttojs/next-utils/useReactQuery";
import React, { useState } from "react";

import { useTranslations } from "../../hooks/useTranslations/useTranslations";
import { H2 } from "@packages/ui/Typography";
import { useGlobal } from "../Layout";
import ReactCalendar from "react-calendar";
import { CalendarDocument } from "./calendar.generated";
import { FormBook } from "./FormBook";
import { PriceDocument } from "./price.generated";
import "react-calendar/dist/Calendar.css";

import styles from "./FormBook.module.scss";

const formatDate = (date: Date) => {
  return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${(
    "0" +
    (date.getDate() + 1)
  ).slice(-2)}`;
};

export const BookingCalendar = () => {
  const { apartment, code } = useGlobal();
  const { data } = useReactQuery(CalendarDocument, { apartment });

  const { mutate: calcPrice, data: price } = useReactMutation(PriceDocument);
  const t = useTranslations();

  const [selection, setSelection] = useState<Date[]>([]);

  return (
    <section data-cy="book" className="p-2 mx-auto max-w-screen-lg md:p-8">
      <H2>{t("BOOK")}</H2>
      <div className="flex flex-col justify-center items-center md:flex-row md:m-4">
        <ReactCalendar
          className={styles["calendar"]}
          tileDisabled={(e) => {
            if (!data) {
              return false;
            }
            let booked = false;
            if (e.date.getTime() < new Date().getTime()) {
              return true;
            }
            (data?.calendar ?? []).forEach((event) => {
              booked =
                booked ||
                (new Date(event?.start ?? "").getTime() <= e.date.getTime() &&
                  new Date(event?.end ?? "").getTime() >= e.date.getTime());
            });
            return booked;
          }}
          selectRange={true}
          onChange={(e: any) => {
            if (Array.isArray(e)) {
              setSelection(e);
              calcPrice({
                from: formatDate(e[0]),
                to: formatDate(e[1]),
                airBnb: code ?? "",
              });
            }
          }}
        />
        <FormBook
          from={selection[0]?.toISOString()}
          to={selection[1]?.toISOString()}
          price={price?.price}
        />
      </div>
    </section>
  );
};
