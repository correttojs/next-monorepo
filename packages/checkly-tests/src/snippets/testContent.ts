import { Page } from "@playwright/test";
import * as expect from "expect";

export const testContent = async (
  page: Page,
  locator: string,
  match: string | RegExp
) => {
  const el = page.locator(locator);
  expect(await el.innerText()).toMatch(match);
};
