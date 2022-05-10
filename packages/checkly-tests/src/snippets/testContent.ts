import { Page } from "@playwright/test";
const expect = require("expect");

export const testContent = async (
  page: Page,
  locator: string,
  match: string | RegExp
) => {
  const el = page.locator(locator);
  expect(await el.innerText()).toMatch(match);
};
