class ResponsivePage {
    visit() {
        cy.visit('https://luni-interface-029.vercel.app/');
    }

    getHeader() {
        return cy.get('.header__container'); 
    }

    getFooter() {
        return cy.get('.chakra-stack'); 
    }

    getNavMenu() {
        return cy.get('.header__container'); 
    }

    getMobileMenuButton() {
        return cy.get('.drawer'); 
    }

    toggleMobileMenu() {
        this.getMobileMenuButton().click({force:true});
    }
}

export default ResponsivePage;
