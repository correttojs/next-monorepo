import { useFormik } from "formik";
import React from "react";

import classNames from "classnames";
import { useTranslations } from "../../hooks/useTranslations/useTranslations";

import styles from "./FormUpload.module.css";
import { Button } from "@packages/ui/Button";

type PropType = {
  field: string;
  formik: ReturnType<typeof useFormik>;
  label: string;
  index: number;
};

export const FormUpload: React.FC<React.PropsWithChildren<PropType>> = ({
  formik,
  field,
  label,
  index,
}) => {
  const t = useTranslations();
  const filedPart = field.split(".")[1];
  return (
    <div className="my-4 mx-2 flex flex-col">
      {(formik.errors?.guests as any)?.[index]?.[filedPart] &&
        (formik.touched?.guests as any)?.[index]?.[filedPart] && (
          <p className="text-xs italic text-red-500">
            {(formik.errors?.guests as any)?.[index]?.[filedPart]}
          </p>
        )}
      <p className="text-gray-700">{label}</p>
      <div className={classNames(styles.upload, "my-2")}>
        <Button color="sky">{t("BROWSE_FILE")}</Button>
        <input
          id={field}
          name={field}
          data-testid={field}
          type="file"
          onChange={(event) => {
            const file = event?.currentTarget?.files?.[0];
            formik.setFieldValue(field, file);
          }}
        />
        <span className="mx-4">
          {(formik?.values?.guests as any)?.[index]?.file?.name}
        </span>
      </div>
    </div>
  );
};
