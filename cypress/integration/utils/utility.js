


class BaseFunction{


    static visitPage(url){
        cy.visit(url);
    }
   
    static inputField(fieldName){

        return cy.get(fieldName);
    }

    static button(buttonName) {
        
        return cy.get("button").contains(buttonName);
    }

    static clickChkBox(fieldName){

        return cy.get(fieldName).check({force:true});
    }

   
}




export default BaseFunction;