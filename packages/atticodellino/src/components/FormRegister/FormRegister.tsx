import { FieldInput } from "@/components/@UI/FieldInput";
import { useReactMutation } from "@correttojs/next-utils/useReactQuery";
import { ErrorMessage, FieldArray, Form, Formik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ReactCalendar from "react-calendar";
import { GrTrash, GrUserAdd } from "react-icons/gr";
import tw from "twin.macro";

import { useTranslations } from "../../hooks/useTranslations/useTranslations";
import { Button } from "../@UI/Buttons";
import { FormError } from "../@UI/FormError";
import { FormSelect } from "../@UI/FormSelect";
import { FormUpload } from "../@UI/FormUpload";
import { Loading } from "../@UI/Loading";
import { Section } from "../@UI/Section";
import { H1 } from "../@UI/Texts";
import { guestValue, initialValues, validationSchema } from "./data";
import { RegisterDocument, ReservationQuery } from "./register.generated";

export const FormRegister: React.FC<{
  reservation: ReservationQuery["reservation"];
  onSuccess: () => void;
}> = ({ reservation, onSuccess }) => {
  const router = useRouter();
  const [isCalendarOpen, setCalendarOpen] = useState<{
    [key: number]: boolean;
  }>({ [0]: false });
  const t = useTranslations();
  const { mutate, isLoading, error } = useReactMutation(RegisterDocument, {
    onSuccess,
  });

  return (
    <div css={tw`max-w-screen-lg p-2 mx-auto md:p-8 `}>
      {error && <FormError />}
      {isLoading && (
        <div css={tw`flex justify-center`}>
          <Loading />
        </div>
      )}
      {!error && !isLoading && (
        <>
          <Section css={tw`p-0`}>
            <H1 css={tw`mb-4`}>{t("REGISTER")}</H1>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                const { guests: guestsForm } = values;
                const guests = guestsForm.map(
                  ({ file, birthDate, ...rest }) => ({
                    ...rest,
                    birthDate: (birthDate ?? new Date())
                      .toISOString()
                      .split("T")[0],
                  })
                );
                mutate({
                  user: {
                    check_out: reservation?.check_out ?? "",
                    home: reservation?.home ?? "",
                    phone: reservation?.phone ?? "",
                    hash: router.query.hash as string,
                    guests,
                  },
                  file: guestsForm.map((g) => g.file),
                });
              }}
            >
              {(formik) => (
                <Form>
                  <FieldArray
                    name="guests"
                    render={(arrayHelpers) => (
                      <>
                        {formik.values.guests.map((guest, index) => {
                          return (
                            <fieldset
                              css={tw`p-2 my-6 border-2 rounded-md md:p-4`}
                              key={`guest${index}`}
                            >
                              <legend>
                                {t("GUEST")} {index + 1}
                              </legend>
                              {formik.values.guests.length > 1 && (
                                <button
                                  style={{ float: "right" }}
                                  onClick={() => arrayHelpers.remove(index)}
                                >
                                  <GrTrash />
                                </button>
                              )}
                              <FieldInput
                                label={t("FIRST_NAME")}
                                field={`guests[${index}].firstName`}
                                placeholder={
                                  reservation?.guest_name?.split(" ")[0] ?? ""
                                }
                              />
                              <FieldInput
                                label={t("LAST_NAME")}
                                field={`guests[${index}].lastName`}
                              />
                              <FormSelect
                                formik={formik as any}
                                field={`guests[${index}]["documentType"]`}
                                options={[
                                  "Passport",
                                  "ID Card",
                                  "Driving License",
                                ]}
                                label={t("DOC_TYPE")}
                              />
                              <FieldInput
                                label={t("DOC_NUMBER")}
                                field={`guests[${index}].documentNumber`}
                              />
                              <FieldInput
                                label={t("DOC_PLACE")}
                                field={`guests[${index}].documentPlace`}
                              />
                              <div css={tw`mx-2 my-4 `}>
                                <ErrorMessage
                                  render={(msg) => (
                                    <p css={tw`text-xs italic text-red-500`}>
                                      {msg}
                                    </p>
                                  )}
                                  name={`guests[${index}].birthDate`}
                                />

                                <p css={tw`text-gray-700`}>{t("BIRTH_DATE")}</p>
                                {!isCalendarOpen[index] && (
                                  <Button
                                    type="button"
                                    css={tw`my-2`}
                                    onClick={() =>
                                      setCalendarOpen({ [index]: true })
                                    }
                                  >
                                    {t("BROWSE_CALENDAR")}
                                  </Button>
                                )}
                                <span css={tw`mx-4`}>
                                  {
                                    (
                                      formik.values?.guests?.[index]
                                        ?.birthDate ?? new Date()
                                    )
                                      ?.toISOString()
                                      ?.split("T")?.[0]
                                  }
                                </span>
                                {isCalendarOpen[index] && (
                                  <ReactCalendar
                                    data-testid="CALENDAR"
                                    onChange={(value: any) => {
                                      formik.setFieldValue(
                                        `guests[${index}].birthDate`,
                                        value
                                      );
                                      setCalendarOpen({ [index]: false });
                                    }}
                                    defaultView="decade"
                                    value={
                                      formik.values.guests[index].birthDate
                                    }
                                  />
                                )}
                              </div>
                              <FieldInput
                                label={t("NATIONALITY")}
                                field={`guests[${index}].nationality`}
                              />{" "}
                              <FieldInput
                                label={t("PLACE_BIRTH")}
                                field={`guests[${index}].placeOfBirth`}
                              />
                              <FormUpload
                                formik={formik as any}
                                field={`guests[${index}].file`}
                                label={t("UPLOAD_DOC")}
                                index={index}
                              />
                              <button
                                data-testid="ADD_GUEST"
                                onClick={() => {
                                  arrayHelpers.push({ ...guestValue });
                                }}
                              >
                                <GrUserAdd />
                              </button>
                            </fieldset>
                          );
                        })}
                      </>
                    )}
                  />

                  <div css={tw`flex justify-end`}>
                    <Button type="submit">{t("SUBMIT")}</Button>
                  </div>
                </Form>
              )}
            </Formik>
          </Section>
        </>
      )}
    </div>
  );
};
