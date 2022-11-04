import * as RQ from "@packages/utils/useSwrGql";
// import { useTranslations } from "@/hooks/useTranslations/useTranslations";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { NextRouter } from "next/router";
import React from "react";

import { FormRegister } from "../FormRegister";

jest.mock("@/hooks/useTranslations/useTranslations");
jest.mock("@packages/utils/useSwrGql", () => {
  return {
    useSwrMutate: jest.fn(),
  };
});
const router: NextRouter = {
  basePath: "",
  pathname: "/",
  route: "/",
  asPath: "/",
  query: { hash: "hashquery" },
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn(),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
  isReady: false,
  isLocaleDomain: false,
  isPreview: false,
  forward: jest.fn(),
};

const addGuest = async (file: File, index: number): Promise<void> => {
  await userEvent.type(
    screen.getAllByLabelText(/FIRST_NAME/i)[index],
    `John ${index}`
  );
  await userEvent.type(
    screen.getAllByLabelText(/LAST_NAME/i)[index],
    `Done ${index}`
  );
  await userEvent.type(
    screen.getAllByLabelText(/DOC_TYPE/i)[index],
    "Passport"
  );
  await userEvent.type(
    screen.getAllByLabelText(/DOC_NUMBER/i)[index],
    `123-${index}`
  );
  await userEvent.type(
    screen.getAllByLabelText(/DOC_PLACE/i)[index],
    `Milano ${index}`
  );

  await userEvent.click(
    screen.getAllByRole("button", { name: /BROWSE_CALENDAR/i })[index]
  );

  await userEvent.click(screen.getAllByRole("button", { name: "2021" })[0]);
  await userEvent.click(screen.getAllByRole("button", { name: /December/ })[0]);
  await userEvent.click(
    screen.getAllByRole("button", { name: `December 23, 2021` })[0]
  );

  await userEvent.type(
    screen.getAllByLabelText(/NATIONALITY/i)[index],
    `Italian ${index}`
  );
  await userEvent.type(
    screen.getAllByLabelText(/PLACE_BIRTH/i)[index],
    `Rome ${index}`
  );

  await userEvent.upload(screen.getByTestId(`guests[${index}].file`), file);
};

const mutate = jest.fn();

describe.skip("Form register", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.spyOn(RQ, "useSwrMutate").mockImplementation(
      () =>
        ({
          mutate,
        } as any)
    );
  });

  it("Should call with 1 guest", async () => {
    render(
      <RouterContext.Provider value={router}>
        <FormRegister
          reservation={{
            check_in: "2021-12-01",
            check_out: "2021-12-04",
            phone: "123456",
          }}
          onSuccess={jest.fn()}
        />
      </RouterContext.Provider>
    );
    const file = new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" });
    await addGuest(file, 0);

    await userEvent.click(screen.getByRole("button", { name: /SUBMIT/i }));

    await waitFor(() =>
      expect(mutate).toHaveBeenCalledWith({
        file: [file],
        user: {
          check_out: "2021-12-04",
          guests: [
            expect.objectContaining({
              documentNumber: "123-0",
              documentPlace: "Milano 0",
              documentType: "Passport",
              firstName: "John 0",
              lastName: "Done 0",
              nationality: "Italian 0",
              placeOfBirth: "Rome 0",
            }),
          ],
          hash: "hashquery",
          home: "",
          phone: "123456",
        },
      })
    );
  });

  it.skip("should call with 3 guest", async () => {
    render(
      <RouterContext.Provider value={router}>
        <FormRegister
          reservation={{
            check_in: "2021-12-01",
            check_out: "2021-12-04",
            phone: "123456",
          }}
          onSuccess={jest.fn()}
        />
      </RouterContext.Provider>
    );
    const file = new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" });
    await addGuest(file, 0);
    await userEvent.click(screen.getByTestId("ADD_GUEST"));
    const file2 = new File(["(⌐□_□)"], "chucknorris2.png", {
      type: "image/png",
    });
    await addGuest(file2, 1);
    await userEvent.click(screen.getByRole("button", { name: /SUBMIT/i }));

    await waitFor(() =>
      expect(mutate).toHaveBeenCalledWith({
        file: [file, file2],
        user: {
          check_out: "2021-12-04",
          guests: [
            expect.objectContaining({
              documentNumber: "123-0",
              documentPlace: "Milano 0",
              documentType: "Passport",
              firstName: "John 0",
              lastName: "Done 0",
              nationality: "Italian 0",
              placeOfBirth: "Rome 0",
            }),
            expect.objectContaining({
              documentNumber: "123-1",
              documentPlace: "Milano 1",
              documentType: "Passport",
              firstName: "John 1",
              lastName: "Done 1",
              nationality: "Italian 1",
              placeOfBirth: "Rome 1",
            }),
          ],
          hash: "hashquery",
          home: "",
          phone: "123456",
        },
      })
    );
  });
});
