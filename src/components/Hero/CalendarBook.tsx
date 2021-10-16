import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const Card: React.FC<{}> = () => {
  return (
    <div
      role="presentation"
      className="overflow-hidden mx-auto max-w-md bg-white rounded-xl shadow-md"
    >
      <Calendar />
    </div>
  );
};
