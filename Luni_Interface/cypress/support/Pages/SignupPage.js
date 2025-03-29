class SignupPage {
    visit() {
        cy.visit('https://luni-interface-029.vercel.app/account/register'); 
    }

    getNameField() {
        return cy.get('.fname__input'); 
    }
    getNameField() {
        return cy.get('.lname__input'); 
    }

    getEmailField() {
        return cy.get('.email__input'); 
    }

    getPasswordField() {
        return cy.get('input[type="password"]'); 
    }

   

    getSignupButton() {
        return cy.get('button[type="submit"]'); 
    }

    getSuccessMessage() {
        return cy.get('.success-message'); 
    }

    // getErrorMessage() {
    //     return cy.get('.error-message'); 
    // }

    signUp(firstName, lastName, email, password) {
        this.getNameField().type(firstName);
        this.getNameField().type(lastName);
        this.getEmailField().type(email);
        this.getPasswordField().type(password);
        this.getSignupButton().click();
    }
}

export default SignupPage;
