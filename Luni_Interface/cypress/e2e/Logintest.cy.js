import LoginPage from "../support/Pages/LoginPage";

describe("Login Page Tests", () => {
    const loginPage = new LoginPage();

    beforeEach(() => {
        loginPage.visit();
    });

    it("should display email and password fields", () => {
        loginPage.getEmailField().should("be.visible");
        loginPage.getPasswordField().should("be.visible");
        loginPage.getLoginButton().should("be.visible");
    });

    // it("should not log in with invalid credentials", () => {
    //     loginPage.login("prajyoti", "1234455");
    //     loginPage.getErrorMessage()
    // });

    it("should log in successfully with valid credentials", () => {
        loginPage.login("prajyoti@gmail.com", "prajyoti@123"); 
        cy.url().should("include", "/"); 
    });
});
