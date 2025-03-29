import HomePage from "../support/Pages/HomePage";

describe("Homepage Tests", () => {
    const homePage = new HomePage();

    beforeEach(() => {
        homePage.visit();
    });

    it("should display the header logo", () => {
        homePage.getHeaderLogo().should("be.visible");
    });

    it("should navigate to login when login button is clicked", () => {
        homePage.clickLoginButton();
       
    });
});