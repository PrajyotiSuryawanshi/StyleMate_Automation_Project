import SignupPage from "../support/Pages/SignupPage"

describe("Signup Page Tests", () => {
    const signupPage = new SignupPage();

    beforeEach(() => {
        signupPage.visit();
    });

    it("should display all signup fields", () => {
        signupPage.getNameField().should("be.visible");
        signupPage.getNameField().should("be.visible");
        signupPage.getEmailField().should("be.visible");
        signupPage.getPasswordField().should("be.visible");
        
        signupPage.getSignupButton().should("be.visible");
    });

    it("should not sign up with an invalid email", () => {
        signupPage.signUp("prajyoti", "suryawanshi", "prajyoti@suryawanshi", "Password123!", );
       // signupPage.getErrorMessage().should("contain", "Invalid email format"); 
    });


    it("should sign up successfully with valid details", () => {
        const randomEmail = `user${Date.now()}@example.com`; 
        signupPage.signUp("sushma", "jadhav", randomEmail, "Password123!");
        signupPage.getSuccessMessage().should("contain", "Account created successfully"); 
    });
});
