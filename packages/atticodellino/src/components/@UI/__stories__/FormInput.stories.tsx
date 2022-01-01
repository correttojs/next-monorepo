// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import { useFormik } from "formik";
import React from "react";
import { FormInput } from "../FormInput";

export default {
  title: "UI/Form/Input",
} as Meta;

const Template: Story<React.ButtonHTMLAttributes<any>> = (args) => {
  const formik = useFormik({
    initialValues: { lastName: "" },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <FormInput formik={formik as any} field={`lastName`} label="Last name" />
    </div>
  );
};

export const FormInputStories = Template.bind({});
