const { chromium } = require("playwright");
import { test, expect, Browser, Page } from "@playwright/test";
import { testHeaderFooter } from "./snippets/testHeaderFooter";
import { it, before, after } from "mocha";
import { getTargetDomain } from "./snippets/getTargetDomain";
import { testContent } from "./snippets/testContent";

describe("Open Pages", () => {
  let browser: Browser;
  let page: Page;

  before(async () => {
    browser = await chromium.launch({
      headless: process.env.HEADLESS !== "false",
    });
    page = await browser.newPage();
    await page.setViewportSize({
      width: 1024,
      height: 4000,
    });
  });

  it(`HomePage`, async () => {
    const targetUrl = getTargetDomain();
    const response = await page.goto(`${targetUrl}/`);

    if ((response?.status?.() ?? 500) > 399) {
      throw new Error(`Failed with response code ${response?.status()}`);
    }
    const title = await page.title();
    await expect(title).toMatch(/L'attico del Lino Garda/);
    await testHeaderFooter(page);

    const gallery = page.locator('[data-testid="img-gallery"]');
    expect(await gallery.count()).toEqual(5);

    await testContent(page, '[data-testid="home-desc"]', /\w+/);
    await testContent(page, '[data-testid="amenities"]', /\w+/);

    await page.waitForSelector(".react-calendar");
    await page.waitForSelector("label[for=firstName]");
    await page.waitForSelector("label[for=lastName]");
    await page.waitForSelector("label[for=email]");
    await page.waitForSelector('[data-testid="book-submit"]');
    // await page.waitForSelector('[data-testid="google-map"] iframe');

    const footer = await page.waitForSelector('[data-testid="footer"]');
    footer.scrollIntoViewIfNeeded();
    await page.waitForSelector('[data-testid="reco"]');

    const faq = page.locator('[data-testid="faq"]');
    await faq.click();

    await page.waitForSelector('[data-testid="enter-code"]');
    expect(await page.url()).toMatch("faq");

    await page.type('[data-testid="enter-code"]', "2021");
    await page.click('[data-testid="submit-code"]');

    await page.waitForSelector('[data-testid="faq-page"]');

    await testHeaderFooter(page);
  }).timeout(10000);

  after(async () => {
    await browser.close();
  });
});
