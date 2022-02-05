import { Given, When,Then} from 'cypress-cucumber-preprocessor/steps';

import RegistrationPage from './loginPage';

Given('I open registeration page',() =>{

    RegistrationPage.visitPage('https://etherscan.io/register');


})

When('I fill the username as {string}',uname=>{
    
    RegistrationPage.fillUserName(uname);
})

When('I fill the email with {string}',email=>{

    RegistrationPage.fillEmail(email);
})


When('I fill the password with {string}',pwd=>{

    RegistrationPage.fillPassword(pwd);
})

When('I fill the confirm password with {string}',pwd=>{

    RegistrationPage.fillConfirmPassword(pwd);
})

When('I agree {string}',(term)=>{

    RegistrationPage.agreeTerm(term);
})

When('I agree {string}',(term)=>{

    RegistrationPage.agreeTerm(term);
})

When('I click on {string} button',(btn)=>{
    
    cy.wait(500);
    RegistrationPage.clickCreateAccount();
})

When('I click the captcha',()=>{

    cy.wait(500);
    cy.clickRecaptcha();
})

Then('I should see message {string} in registration page',msg=>{

    RegistrationPage.verifyCaptachaError(msg);
})

Then('I should see message {string}',msg=>{

    RegistrationPage.verifyUserNameError(msg);

})

Then('I should see error {string}',(msg)=>{

    RegistrationPage.verifyEmailError(msg);

})