class LoginPage {
    visit() {
        cy.visit('https://luni-interface-029.vercel.app/account/login'); // Update the actual login URL if different
    }

    getEmailField() {
        return cy.get('input[type="email"]'); 
    }

    getPasswordField() {
        return cy.get('input[type="password"]'); 
    }

    getLoginButton() {
        return cy.get('button[type="submit"]'); 
    }

    // getErrorMessage() {
    //     return cy.get('.error-message'); 
    // }

    login(email, password) {
        this.getEmailField().type(email);
        this.getPasswordField().type(password);
        this.getLoginButton().click();
    }
}

export default LoginPage;
