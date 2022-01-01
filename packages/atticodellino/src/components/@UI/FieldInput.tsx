import { ErrorMessage, Field } from "formik";
import React from "react";
import tw from "twin.macro";

type PropType = {
  field: string;
  type?: "text" | "number";
  label: string;
  placeholder?: string;
};

export const TwInput = tw`text-lg border border-solid border-gray-400 leading-6 p-3 rounded mt-1 block w-full focus:border-blue-800`;

export const FieldInput: React.FC<PropType> = ({
  field,
  label,
  type = "text",
  placeholder,
}) => {
  return (
    <div css={tw`m-2`}>
      <ErrorMessage
        render={(msg) => <p css={tw`text-red-500 text-xs italic`}>{msg}</p>}
        name={field}
      />
      <label css={tw`block`} htmlFor={field}>
        <span css={tw`text-gray-700`}> {label}</span>
        <Field
          css={TwInput}
          name={field}
          id={field}
          placeholder={placeholder ?? ""}
          type={type}
        />
      </label>
    </div>
  );
};
