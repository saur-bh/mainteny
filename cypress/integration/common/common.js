import { defineStep } from 'cypress-cucumber-preprocessor/steps'
import RegistrationPage from '../mainteny-test/Login/'


defineStep('I want to wait {int} millisec',time=>{

    cy.wait(time)
})


defineStep('I see {string} in the url',url=>{
    cy.url().should('include',url)
})


defineStep('I visit {string} page in the etherscan applicationn',URL=>{

   
    RegistrationPage.visitPage('https://etherscan.io/'+URL)
    
})