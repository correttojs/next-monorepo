// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import { FormikProvider, useFormik } from "formik";
import React from "react";
import { Button } from "../Buttons";
import { FormSelect } from "../FormSelect";

export default {
  title: "UI/Form/Select",
} as Meta;

const Template: Story<React.ButtonHTMLAttributes<any>> = (args) => {
  const formik = useFormik({
    initialValues: { lastName: "Test1" },
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
        <FormSelect
          formik={formik as any}
          field={`lastName`}
          label="Last name"
          options={["Test1", "Test2"]}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export const FormSelectStories = Template.bind({});
