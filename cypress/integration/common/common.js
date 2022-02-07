import { defineStep, After } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../mainteny-test/Login/loginPage";

defineStep("I want to wait {int} millisec", (time) => {
  cy.wait(time);
});

defineStep("I see {string} in the url", (url) => {
  cy.url().should("include", url);
});

defineStep("I visit {string} page in the mainteny applicationn", (URL) => {
  LoginPage.visitPage("https://staging.mainteny.com/" + URL);
});
defineStep("Logout from application", () => {
  cy.get("nb-action.user-action").click();
  cy.get("span").contains("Logout").click();
});
