import * as TR from "@/hooks/useTranslations/useTranslations";
import * as RQ from "@packages/utils/useSwrGql";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import { FormBook } from "../FormBook";

jest.mock("@packages/utils/useSwrGql", () => {
  return {
    useSwrMutate: jest.fn(),
  };
});
beforeEach(() => {
  jest.resetAllMocks();
});
test("FormBook Should call with 1 guest", async () => {
  const mutate = jest.fn();
  jest.spyOn(RQ, "useSwrMutate").mockImplementation(
    () =>
      ({
        mutate,
      } as any)
  );
  jest.spyOn(TR, "useTranslations").mockImplementation(() => (k: string) => k);

  render(<FormBook from={"2021-01-01"} to={"2021-02-04"} price={123} />);
  await userEvent.type(screen.getByLabelText(/FIRST_NAME/i), `John`);
  await userEvent.type(screen.getByLabelText(/LAST_NAME/i), `John`);
  await userEvent.type(screen.getByLabelText(/EMAIL/i), `test@gmail.com`);

  await userEvent.click(screen.getByRole("button", { name: /SUBMIT/i }));

  await waitFor(() =>
    expect(mutate).toHaveBeenCalledWith({
      user: {
        email: "test@gmail.com",
        firstName: "John",
        from: "2021-01-01",
        lastName: "John",
        to: "2021-02-04",
      },
    })
  );
});
