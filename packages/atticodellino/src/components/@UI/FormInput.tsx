import { useFormik } from "formik";
import React from "react";

type FormikReturn = ReturnType<typeof useFormik>;

type PropType = {
  field: string;
  formik: FormikReturn;
  type?: "text" | "number" | "email";
  label?: string;
  index?: number;
  placeholder?: string;
};

export const formatLabel = (value: string) =>
  value
    // insert a space before all caps
    .replace(/([A-Z])/g, " $1")
    // uppercase the first character
    .replace(/^./, function (str) {
      return str.toUpperCase();
    });

export const FormInput: React.FC<PropType> = ({
  field,
  formik,
  label,
  type = "text",
  index,
  placeholder,
}) => {
  const filedPart = field.split(".")[1];
  let error = formik.errors[field];
  let touched = formik.touched[field];
  if (typeof index !== "undefined") {
    error = (formik.errors?.guests as any)?.[index]?.[filedPart];
    touched = (formik.touched?.guests as any)?.[index]?.[filedPart];
  }
  return (
    <div className="my-4 mx-2" data-cy={field}>
      {error && touched && (
        <p data-cy="error" className="text-xs italic text-red-500">
          {error}
        </p>
      )}
      <label className="block" htmlFor={field}>
        <span className="text-gray-700"> {label ?? formatLabel(field)}</span>
        <input
          className="block p-3 mt-1 w-full leading-6 rounded-md border-gray-400 focus:border-blue-800 border-solid"
          style={{
            borderWidth: "1px",
          }}
          name={field}
          id={field}
          onChange={formik.handleChange}
          placeholder={placeholder ?? ""}
          type={type}
          value={formik.values[field]}
        />
      </label>
    </div>
  );
};
