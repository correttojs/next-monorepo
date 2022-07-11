import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./CalendarBook.module.scss";

export const CalendarBooks: React.FC<React.PropsWithChildren<{}>> = () => {
  return (
    <Calendar
      className={`overflow-hidden relative z-10 mx-auto max-w-md ${styles.calendar}`}
    />
  );
};
