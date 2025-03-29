class FooterPage {
    visit() {
        cy.visit('https://luni-interface-029.vercel.app/');
    }

    getFooterLinks() {
        return cy.get('.chakra-stack'); 
    }

    getSocialMediaIcons() {
        return cy.get('.chakra-link'); 
    }

    getCopyrightText() {
        return cy.get('.chakra-text'); 
    }
}

export default FooterPage;
