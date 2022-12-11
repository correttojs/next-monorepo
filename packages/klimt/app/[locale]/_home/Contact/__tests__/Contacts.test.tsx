import { gqlRequest } from "@packages/utils/gqlRequest";
import * as GQLREQ from "@packages/utils/gqlRequest";
import { render, screen, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { useTransition } from "react";

import { Contact } from "../Contact";

jest.mock("../../../_layout/TranslationContext", () => ({
  useTranslations: () => (k: string) => k,
}));
jest.mock("@packages/utils/gqlRequest", () => ({
  ...jest.requireActual("@packages/utils/gqlRequest"),
  gqlRequest: jest.fn(),
}));

describe("Contacts", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("Should submit Contact form", async () => {
    render(<Contact apartment={{} as any} />);
    await act(async () => {
      await userEvent.type(screen.getByPlaceholderText(/INPUT_NAME/i), `John`);
      await userEvent.type(
        screen.getByPlaceholderText(/INPUT_EMAIL/i),
        `test@email.com`
      );
      await userEvent.type(
        screen.getByPlaceholderText(/INPUT_MESSAGE/i),
        `message test`
      );

      await userEvent.click(screen.getByRole("button", { name: /SEND/i }));

      await waitFor(() =>
        expect(gqlRequest).toHaveBeenCalledWith(expect.anything(), {
          email: "test@email.com",
          name: "John",
          message: "message test",
        })
      );
    });
  });

  it("Should NOT submit Contact form", async () => {
    render(<Contact apartment={{} as any} />);
    await userEvent.type(screen.getByPlaceholderText(/INPUT_NAME/i), `Jo`);
    await userEvent.type(
      screen.getByPlaceholderText(/INPUT_EMAIL/i),
      `test@email.com`
    );
    await userEvent.type(
      screen.getByPlaceholderText(/INPUT_MESSAGE/i),
      `message test`
    );

    await userEvent.click(screen.getByRole("button", { name: /SEND/i }));

    await waitFor(() => expect(gqlRequest).not.toHaveBeenCalled());
  });

  it("Should NOT submit Contact form", async () => {
    render(<Contact apartment={{} as any} />);
    await userEvent.type(screen.getByPlaceholderText(/INPUT_NAME/i), `Joh`);
    await userEvent.type(
      screen.getByPlaceholderText(/INPUT_EMAIL/i),
      `testemail.com`
    );
    await userEvent.type(
      screen.getByPlaceholderText(/INPUT_MESSAGE/i),
      `message test`
    );

    await userEvent.click(screen.getByRole("button", { name: /SEND/i }));

    await waitFor(() => expect(gqlRequest).not.toHaveBeenCalled());
  });

  it("Should NOT submit Contact form", async () => {
    render(<Contact apartment={{} as any} />);
    userEvent.type(screen.getByPlaceholderText(/INPUT_NAME/i), `Joh`);
    userEvent.type(
      screen.getByPlaceholderText(/INPUT_EMAIL/i),
      `test@email.com`
    );

    userEvent.click(screen.getByRole("button", { name: /SEND/i }));

    await waitFor(() => expect(gqlRequest).not.toHaveBeenCalled());
  });
});
