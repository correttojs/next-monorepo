/* eslint-disable jest/expect-expect */
describe("Footer", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Should contain policy url", () => {
    cy.get("[data-cy=footer]").scrollIntoView();
    cy.get("[data-cy=policy]").click();

    cy.url().should("include", "privacy");
  });
});
