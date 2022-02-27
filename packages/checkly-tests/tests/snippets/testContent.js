const expect = require("expect");

const testContent = async (page, locator, match) => {
  const el = page.locator(locator);
  expect(await el.innerText()).toMatch(match);
};

module.exports = testContent;
