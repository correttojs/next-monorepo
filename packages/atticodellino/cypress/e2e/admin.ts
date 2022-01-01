/* eslint-disable jest/expect-expect */
describe("Header", () => {
  beforeEach(() => {
    cy.visit("/admin");
  });
  it.skip("Should sign in", () => {
    cy.get("[data-cy=signin]").click();
  });
});
