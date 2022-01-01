/* eslint-disable jest/expect-expect */
describe("Header", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it.skip("Should contain header", () => {
    cy.get("header")
      .should("be.visible")
      .should("have.css", "background-color", "rgb(41, 0, 18)");

    cy.get("[data-cy=dropdown]")
      .focus()
      .children()
      .first()
      .trigger("mouseover")
      .trigger("touchstart");
    cy.get("[data-cy=dropdown-item]").first().click();
    cy.url().should("include", "it");
  });
});
