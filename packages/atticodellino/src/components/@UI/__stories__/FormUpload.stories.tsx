// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import { useFormik } from "formik";
import React from "react";
import { Button } from "@packages/ui/Button/Button";
import { FormUpload } from "../FormUpload";

export default {
  title: "UI/Form/Upload",
} as Meta;

const Template: Story<React.ButtonHTMLAttributes<any>> = (args) => {
  const formik = useFormik({
    initialValues: { file: null },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <FormUpload
          index={0}
          formik={formik as any}
          field={`file`}
          label="Upload"
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export const FormSelectStories = Template.bind({});
