import Base from "../../utils/utility";
const USERNAME = "input[type='email']";
const PASSWORD = "input[type='password']";

class LoginPage {
  static typeUserName(uname) {
    Base.inputField(USERNAME).type(uname);
  }

  static typePassword(pwd) {
    Base.inputField(PASSWORD).type(pwd);
  }

  static clickBtn(buttonName) {
    Base.button(buttonName).click();
  }

  static verifyErrorMessage(msg) {
    cy.get("div.error").should("have.text", msg);
  }

  static clickLink() {
    cy.get("a").contains("Forgot Password?").click();
  }
}

export default LoginPage;
