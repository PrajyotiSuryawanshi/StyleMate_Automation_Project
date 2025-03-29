import HeaderPage from "../pages/HeaderPage";

describe("Header Tests", () => {
    const headerPage = new HeaderPage();

    beforeEach(() => {
        headerPage.visit();
    });

    it("should display the logo", () => {
        headerPage.getLogo().should("be.visible");
    });

    it("should have navigation links", () => {
        headerPage.getNavLinks().should("have.length.at.least", 3); 
    });

    it("should allow search input", () => {
        headerPage.getSearchInput().type("Test Product{enter}");
        cy.url().should("include", "search"); 
    });

    it("should navigate to the cart page on clicking cart icon", () => {
        headerPage.getCartIcon().click();
        cy.url().should("include", "/cart");
    });

    it("should navigate to the login page on clicking login button", () => {
        headerPage.getLoginButton().click();
        cy.url().should("include", "/login");
    });
});
