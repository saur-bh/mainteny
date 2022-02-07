import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import LoginPage from "./loginPage";
import Base from "../../utils/utility";

Given("I open login page", () => {
  Base.visitPage("https://staging.mainteny.com/auth/login");
});

When("I fill the email with {string}", (email) => {
  LoginPage.typeUserName(email);
});

When("I fill the password with {string}", (pwd) => {
  LoginPage.typePassword(pwd);
});

When("I click on {string} button", (loginBtn) => {
  LoginPage.clickBtn(loginBtn);
});

Then("I should see message {string}", (errorMsg) => {
  LoginPage.verifyErrorMessage(errorMsg);
});

When("I click on forget password link", () => {
  LoginPage.clickLink();
});
