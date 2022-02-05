
import Base from '../../utils/utility'
const USERNAME = '#ContentPlaceHolder1_txtUserName'
const EMAIL = '#ContentPlaceHolder1_txtEmail'
const PASSWRD = '#ContentPlaceHolder1_txtPassword'
const CONFIRMPASSWRD ='#ContentPlaceHolder1_txtPassword2'
const AGREETERM ='#ContentPlaceHolder1_MyCheckBox'
const AGREENEWS ="#ContentPlaceHolder1_SubscribeNewsletter"
const CREATE_ACCOUNT= '#ContentPlaceHolder1_btnRegister'
const ERROREMAIL= '#ContentPlaceHolder1_txtEmail-error'
const ERROR_USRNAME ='#ContentPlaceHolder1_txtUserName-error'


class RegistrationPage{

    static visitPage(url){
        
        cy.visit(url);
    }

    static fillUserName(uname){
       
        Base.inputField(USERNAME).type(uname);
    }

   

    static fillEmail(email){

        Base.inputField(EMAIL).type(email);
    }

    static fillPassword(pwd){

        Base.inputField(PASSWRD).type(pwd);
    }

    static fillConfirmPassword(pwd){

        Base.inputField(CONFIRMPASSWRD).type(pwd);
    }

    static agreeTerm(){

        Base.clickChkBox(AGREETERM);

    }

    static agreeNewsLetter(){

        Base.clickChkBox(AGREENEWS);

    }
    static clickCreateAccount(){
        Base.clickBtn(CREATE_ACCOUNT).click();
    }

    static verifyCaptachaError(msg){
        cy.get('.alert-danger').should('contain.text',msg);
    }

    static verifyEmailError(msg){

        cy.get(ERROREMAIL).should('contain.text',msg);
    }

    static verifyUserNameError(msg){

        cy.get(ERROR_USRNAME).should('contain.text',msg);
    }

}

export default RegistrationPage