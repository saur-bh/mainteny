


class BaseFunction{

   
    static inputField(fieldName){

        return cy.get(fieldName);
    }

    static clickBtn(fieldName) {
        
        return cy.get(fieldName);
    }

    static clickChkBox(fieldName){

        return cy.get(fieldName).check({force:true});
    }

   
}




export default BaseFunction;