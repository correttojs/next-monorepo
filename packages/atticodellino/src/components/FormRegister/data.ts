import * as Yup from "yup";

export type FormValues = keyof typeof initialValues | "email";

export const guestValue = {
  firstName: "",
  lastName: "",
  documentNumber: "",
  documentType: "Passport",
  documentPlace: "",
  nationality: "",
  placeOfBirth: "",
  birthDate: null,
  file: null,
};
export const initialValues = {
  // email: "",
  guests: [guestValue],
};

export const validationSchema = Yup.object().shape({
  guests: Yup.array()
    .of(
      Yup.object().shape({
        firstName: Yup.string()
          .min(2, "Too Short!")
          .max(50, "Too Long!")
          .required("Required"),
        lastName: Yup.string()
          .min(2, "Too Short!")
          .max(50, "Too Long!")
          .required("Required"),
        documentType: Yup.string()
          // .min(2, "Too Short!")
          // .max(50, "Too Long!")
          .required("Required"),
        documentNumber: Yup.string()
          .min(2, "Too Short!")
          .max(50, "Too Long!")
          .required("Required"),
        nationality: Yup.string()
          .min(2, "Too Short!")
          .max(50, "Too Long!")
          .required("Required"),
        // placeOfBirth: Yup.string()
        //   .min(2, "Too Short!")
        //   .max(50, "Too Long!")
        //   .required("Required"),
        birthDate: Yup.date().required("Required"),
        file: Yup.mixed().required("A file is required"),
      })
    )
    .required("Must have guests"),

  // email: Yup.string().email("Invalid email").required("Required"),
});
