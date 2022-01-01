/* eslint-disable jest/expect-expect */
describe("Book", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("[data-cy=lazy]").scrollIntoView();
    cy.get("[data-cy=book]").scrollIntoView();
  });
  it("Should contain book", () => {
    cy.get("[data-cy=book]")
      .scrollIntoView()
      .find(".react-calendar")
      .should("be.visible");
  });

  it("Should fill form", () => {
    cy.get(".react-calendar__navigation__next2-button")
      .should("be.visible")
      .click()
      .click()
      .click();
    cy.get(".react-calendar__month-view__days__day")
      .first()
      .should("be.visible")
      .click();
    cy.get(".react-calendar__month-view__days__day")
      .eq(5)
      .should("be.visible")
      .click();

    cy.get("[data-cy=price]").should("be.visible");

    cy.get("#firstName").type("Test");
    cy.get("#lastName").type("Hello");
    cy.get("#email").type("Email");
    cy.get("[data-cy=book-submit]").click();

    cy.get("[data-cy=email]")
      .find("[data-cy=error]")
      .should("contain.text", "Invalid email");
  });
});
