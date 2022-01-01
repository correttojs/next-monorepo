import { useFormik } from "formik";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { useTranslations } from "../../hooks/useTranslations/useTranslations";
import { Button } from "./Buttons";

const UploadStyle = styled.div<{ error: boolean }>`
  position: relative;
  overflow: hidden;
  display: inline-block;
  margin-right: 20px;
  input[type="file"] {
    font-size: 100px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    border: none;
    cursor: pointer;
  }
  button {
    border-color: ${({ error }) => (error ? "#FF4040" : "#000")};
  }
`;

type PropType = {
  field: string;
  formik: ReturnType<typeof useFormik>;
  label: string;
  index: number;
};

export const FormUpload: React.FC<PropType> = ({
  formik,
  field,
  label,
  index,
}) => {
  const t = useTranslations();
  const filedPart = field.split(".")[1];
  return (
    <div className="flex flex-col my-4 mx-2">
      {(formik.errors?.guests as any)?.[index]?.[filedPart] &&
        (formik.touched?.guests as any)?.[index]?.[filedPart] && (
          <p className="text-xs italic text-red-500">
            {(formik.errors?.guests as any)?.[index]?.[filedPart]}
          </p>
        )}
      <p className="text-gray-700">{label}</p>
      <UploadStyle className="my-2" error={false}>
        <Button>{t("BROWSE_FILE")}</Button>
        <input
          id={field}
          name={field}
          data-testid={field}
          type="file"
          onChange={(event) => {
            const file = event?.currentTarget?.files?.[0];
            formik.setFieldValue(field, file);
          }}
          className="form-control"
        />
        <span className="mx-4">
          {(formik?.values?.guests as any)?.[index]?.file?.name}
        </span>
      </UploadStyle>
    </div>
  );
};
