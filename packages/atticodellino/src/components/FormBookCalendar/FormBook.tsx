import { FieldInput } from "@/components/@UI/FieldInput";
import { useReactMutation } from "@correttojs/next-utils/useReactQuery";
import { Form, Formik } from "formik";
import React from "react";
import tw from "twin.macro";

import { useTranslations } from "../../hooks/useTranslations/useTranslations";
import { Button } from "../@UI/Buttons";
import { FormError } from "../@UI/FormError";
import { Loading } from "../@UI/Loading";
import { MQ_NOT_MOBILE } from "../Layout";
import { bookInitialValues, bookValidationSchema } from "./bookData";
import { BookNowDocument } from "./bookNow.generated";

export const FormBook: React.FC<{
  from: string;
  to: string;
  price?: number | null;
}> = ({ from, to, price }) => {
  const {
    mutate: bookNow,
    data,
    isLoading,
    error,
  } = useReactMutation(BookNowDocument);

  const t = useTranslations();

  return (
    <div
      css={`
        ${tw`m-4 w-full`}
        @media ${MQ_NOT_MOBILE} {
          min-width: 400px;
        }
      `}
    >
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
      {isLoading && <Loading />}
      {!data && !error && !isLoading && (
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

              <div css={tw`m-2`}>
                {price && <p data-cy="price">{price} euros</p>}
              </div>

              <div css={tw`flex justify-end`}>
                <Button
                  disabled={!from || !to || !price}
                  type="submit"
                  data-cy="book-submit"
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
