import FooterPage from "../support/Pages/FooterPage";

describe("Footer Tests", () => {
    const footerPage = new FooterPage();

    beforeEach(() => {
        footerPage.visit();
    });

    it("should display all footer links", () => {
        footerPage.getFooterLinks().should("have.length.at.least", 3); 
    });

    it("should open social media links", () => {
        footerPage.getSocialMediaIcons().should("have.length.at.least", 3);
    });

    it("should display copyright text", () => {
        footerPage.getCopyrightText().should("contain", "©");
    });
});
