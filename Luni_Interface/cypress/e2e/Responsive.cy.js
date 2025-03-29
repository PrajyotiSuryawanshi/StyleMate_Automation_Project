import ResponsivePage from "../support/Pages/ResponsivePage";

describe("Responsive and Layout Tests", () => {
    const responsivePage = new ResponsivePage();

    beforeEach(() => {
        responsivePage.visit();
    });

    const viewports = [
        { device: "Desktop", width: 1280, height: 800 },
        { device: "Tablet", width: 768, height: 1024 },
        { device: "Mobile", width: 375, height: 667 }
    ];

    viewports.forEach(viewport => {
        it(`should display header and footer correctly on ${viewport.device}`, () => {
            cy.viewport(viewport.width, viewport.height);
            responsivePage.getHeader().should("be.visible");
            responsivePage.getFooter().should("be.visible");
        });

        it(`should ensure navigation is accessible on ${viewport.device}`, () => {
            cy.viewport(viewport.width, viewport.height);
            if (viewport.device === "Mobile") {
                responsivePage.getMobileMenuButton().should("be.visible").click();
            }
            responsivePage.getNavMenu().should("be.visible");
        });
    });

    it("should ensure mobile menu opens and closes correctly", () => {
        cy.viewport(375, 667);
        responsivePage.getMobileMenuButton().should("be.visible");
        responsivePage.toggleMobileMenu();
        responsivePage.getNavMenu().should("be.visible");
        responsivePage.toggleMobileMenu();
        responsivePage.getNavMenu().should("be.visible");
    });
});
