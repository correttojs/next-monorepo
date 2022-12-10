// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Button } from "@packages/ui/Button";
import { Meta, Story } from "@storybook/react/types-6-0";
import { useFormik } from "formik";
import React from "react";
import { FormError } from "../FormError";
import { FormInput } from "../FormInput";
import { FormSelect } from "../FormSelect";
import { FormUpload } from "../FormUpload";

export default {
  title: "AtticoDelLino/Form",
} as Meta;

const Template: Story<React.ButtonHTMLAttributes<any>> = (args) => {
  const formik = useFormik({
    initialValues: { lastName: "" },
    onSubmit: (values) => {},
  });
  return (
    <div>
      <FormInput formik={formik as any} field={`lastName`} label="Last name" />
      <FormError />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <FormSelect
          formik={formik as any}
          field={`lastName`}
          label="Last name"
          options={["Test1", "Test2"]}
        />
        <FormUpload
          index={0}
          formik={formik as any}
          field={`file`}
          label="Upload"
        />
        <Button color="sky" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export const FormErrorStories = Template.bind({});
