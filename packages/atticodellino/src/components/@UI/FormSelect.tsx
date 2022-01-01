import { useFormik } from "formik";
import React from "react";

import { formatLabel } from "./FormInput";

type PropType = {
  field: string;
  formik: ReturnType<typeof useFormik>;
  label?: string;
  options: string[];
};

export const FormSelect: React.FC<PropType> = ({
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
          className="block p-3 mt-1 w-full leading-6 rounded-md border-gray-400 focus:border-blue-800 border-solid"
          css={`
            border-width: 1px;
          `}
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
