/* eslint-disable jest/expect-expect */
describe("Home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should contain hero", () => {
    cy.get("[data-cy=hero]")
      .should("be.visible")
      .children("img")
      .first()
      .should("be.visible");
  });

  it("Should open modal", () => {
    cy.get("[data-cy=hero]")
      .should("be.visible")
      .children("img")
      .first()
      .click();
    cy.get(".ReactModal__Content")
      .should("be.visible")
      .find("img")
      .should("be.visible");
    cy.get("[data-cy=next]").click();
    cy.get(".ReactModal__Content").find("img").should("be.visible");
    cy.get("[data-cy=prev]").click();
    cy.get(".ReactModal__Content").find("img").should("be.visible");
    cy.get("[data-cy=close]").click();
    cy.get(".ReactModal__Content").should("not.exist");
  });

  it("Should click on sponsor card", () => {
    cy.get("[data-cy=card]").should("be.visible").click();
    cy.url().should("include", "garda");
  });
});
