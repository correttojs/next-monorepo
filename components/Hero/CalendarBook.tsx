import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const Card: React.FC<{}> = () => {
  return (
    <div
      role="presentation"
      className="max-w-md mx-auto overflow-hidden bg-white shadow-md rounded-xl"
    >
      <Calendar />
    </div>
  );
};
