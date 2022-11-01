import { useFormik } from "formik";
import React from "react";

import { formatLabel } from "./FormInput";

type PropType = {
  field: string;
  formik: ReturnType<typeof useFormik>;
  label?: string;
  options: string[];
};

export const FormSelect: React.FC<React.PropsWithChildren<PropType>> = ({
  field,
  formik,
  label,
  options,
}) => {
  return (
    <div className="m-2">
      <label className="block" htmlFor={field}>
        <span className="text-gray-700">{label ?? formatLabel(field)}</span>
        <select
          className="mt-1 block w-full rounded-md border-solid border-gray-400 p-3 leading-6 focus:border-blue-800"
          style={{
            borderWidth: "1px",
          }}
          value={formik.values[field]}
          id={field}
          name={field}
          onBlur={formik.handleChange}
          defaultValue={options[0]}
        >
          {options.map((option, k) => (
            <option key={k} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};
