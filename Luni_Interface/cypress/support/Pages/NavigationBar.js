class NavigationBar {
    visit() {
        cy.visit('https://luni-interface-029.vercel.app/');
    }

    getNavLinks() {
        return cy.get('.nav-link'); 
    }

    clickNavLink(linkText) {
        cy.contains('nav div ul li a ', linkText).click();
    }

    getActiveNavLink() {
        return cy.get('.shop__contianer'); 
    }

    getLogo() {
        return cy.get('a img'); 
    }
}

export default NavigationBar;
