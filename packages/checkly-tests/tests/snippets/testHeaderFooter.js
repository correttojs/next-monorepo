const expect = require("expect");

const testHeaderFooter = async (page) => {
  const headerTitle = page.locator('[data-testid="header-title"]');
  expect(await headerTitle.innerText()).toMatch("L'attico del Lino Garda");

  const headerPhone = page.locator('[data-testid="header-phone"]').first();
  expect(await headerPhone.innerText()).toMatch(/\w+/);
  const headerMail = page.locator('[data-testid="header-mail"]').first();
  expect(await headerMail.innerText()).toMatch(/\w+/);
};

module.exports = testHeaderFooter;
