import { FieldInput } from "@/components/@UI/FieldInput";
import { useSwrMutate } from "@packages/utils/useSwrGql";
import { Form, Formik } from "formik";
import React from "react";

import { useTranslations } from "../../hooks/useTranslations/useTranslations";
import { Button } from "@/components/Layout/Button";

import { FormError } from "../@UI/FormError";
import { Loading } from "@packages/ui/Loading";
import { bookInitialValues, bookValidationSchema } from "./bookData";
import { BookNowDocument } from "./bookNow.generated";

import classNames from "classnames";
import styles from "./FormBook.module.scss";

export const FormBook: React.FC<React.PropsWithChildren<{
  from: string;
  to: string;
  price?: number | null;
}>> = ({ from, to, price }) => {
  const {
    mutate: bookNow,
    data,
    isValidating,
    error,
  } = useSwrMutate(BookNowDocument);

  const t = useTranslations();

  return (
    <div className={classNames(styles["form-book"], "m-4 w-full")}>
      {data && (
        <div>
          <h3>
            {t("THANKYOU", {
              name: data?.book?.firstName,
              lastName: data?.book?.lastName,
            })}
          </h3>
          <p>{t("BOOK_RESPONSE")}</p>
        </div>
      )}
      {error && <FormError />}
      {isValidating && <Loading />}
      {!data && !error && !isValidating && (
        <Formik
          initialValues={bookInitialValues}
          validationSchema={bookValidationSchema}
          onSubmit={(values) => {
            bookNow({
              user: { ...values, from, to },
            });
          }}
        >
          {() => (
            <Form>
              <FieldInput label={t("FIRST_NAME")} field={"firstName"} />
              <FieldInput label={t("LAST_NAME")} field={"lastName"} />
              <FieldInput label={t("EMAIL")} field={"email"} />

              <div className="m-2">
                {price && <p data-cy="price">{price} euros</p>}
              </div>

              <div className="flex justify-end">
                <Button
                  disabled={!from || !to || !price}
                  type="submit"
                  data-testid="book-submit"
                >
                  Submit
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};
