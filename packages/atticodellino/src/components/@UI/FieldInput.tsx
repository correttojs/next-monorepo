import { ErrorMessage, Field } from "formik";
import React from "react";

type PropType = {
  field: string;
  type?: "text" | "number";
  label: string;
  placeholder?: string;
};

export const TwInput = `text-lg border border-solid border-gray-400 leading-6 p-3 rounded mt-1 block w-full focus:border-blue-800`;

export const FieldInput: React.FC<PropType> = ({
  field,
  label,
  type = "text",
  placeholder,
}) => {
  return (
    <div className="m-2">
      <ErrorMessage
        render={(msg) => <p className="text-xs italic text-red-500">{msg}</p>}
        name={field}
      />
      <label className="block" htmlFor={field}>
        <span className="text-gray-700"> {label}</span>
        <Field
          className={TwInput}
          name={field}
          id={field}
          placeholder={placeholder ?? ""}
          type={type}
        />
      </label>
    </div>
  );
};
