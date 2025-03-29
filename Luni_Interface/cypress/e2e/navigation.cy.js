import NavigationBar from "../support/Pages/NavigationBar";

describe("Navigation Bar Tests", () => {
    const navBar = new NavigationBar();

    beforeEach(() => {
        navBar.visit();
    });

    it("should display navigation links", () => {
        navBar.getNavLinks().should("have.length.at.least", 3); 
    });

    it("should navigate to the Home page when clicking the logo", () => {
        navBar.getLogo().click();
        cy.url().should("eq", "https://luni-interface-029.vercel.app/");
    });

    it("should navigate to different pages when clicking nav links", () => {
        const pages = [
            { name: "Shop", url: "/shop" },
            { name: "Men", url: "/category/men" },
            { name: "Women", url: "/category/women" }
        ];

        pages.forEach(page => {
            navBar.clickNavLink(page.name);
            cy.url().should("include", page.url);
        });
    });

    it("should highlight the active navigation link", () => {
        navBar.clickNavLink("Shop");
        navBar.getActiveNavLink().should("include.text", "Men Fashion");
    });
});
