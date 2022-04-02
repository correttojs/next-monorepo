import * as TR from "@packages/utils/useTranslations";
import * as GQLREQ from "@packages/utils/gqlRequest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import { Contact } from "../Contact";

beforeEach(() => {
  jest.resetAllMocks();
});
test("Should submit Contact form", async () => {
  const mutate = jest.fn();

  jest.spyOn(GQLREQ, "gqlRequest").mockImplementation(mutate);
  jest.spyOn(TR, "useTranslations").mockImplementation(() => (k: string) => k);

  render(<Contact apartment={{} as any} />);
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
    expect(mutate).toHaveBeenCalledWith(expect.anything(), {
      email: "test@email.com",
      name: "John",
      message: "message test",
    })
  );
});

test("Should NOT submit Contact form", async () => {
  const mutate = jest.fn();

  jest.spyOn(GQLREQ, "gqlRequest").mockImplementation(mutate);
  jest.spyOn(TR, "useTranslations").mockImplementation(() => (k: string) => k);

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

  await waitFor(() => expect(mutate).not.toHaveBeenCalled());
});

test("Should NOT submit Contact form", async () => {
  const mutate = jest.fn();

  jest.spyOn(GQLREQ, "gqlRequest").mockImplementation(mutate);
  jest.spyOn(TR, "useTranslations").mockImplementation(() => (k: string) => k);

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

  await waitFor(() => expect(mutate).not.toHaveBeenCalled());
});

test("Should NOT submit Contact form", async () => {
  const mutate = jest.fn();

  jest.spyOn(GQLREQ, "gqlRequest").mockImplementation(mutate);
  jest.spyOn(TR, "useTranslations").mockImplementation(() => (k: string) => k);

  render(<Contact apartment={{} as any} />);
  userEvent.type(screen.getByPlaceholderText(/INPUT_NAME/i), `Joh`);
  userEvent.type(screen.getByPlaceholderText(/INPUT_EMAIL/i), `test@email.com`);

  userEvent.click(screen.getByRole("button", { name: /SEND/i }));

  await waitFor(() => expect(mutate).not.toHaveBeenCalled());
});
