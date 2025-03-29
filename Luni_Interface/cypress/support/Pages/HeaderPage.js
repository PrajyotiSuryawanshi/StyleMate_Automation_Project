class HeaderPage {
    visit() {
        cy.visit('https://luni-interface-029.vercel.app/');
    }

    getLogo() {
        return cy.get('.header-logo');
    }

    getNavLinks() {
        return cy.get('.nav-link'); 
    }

    getSearchInput() {
        return cy.get('.search-input'); 
    }

    getCartIcon() {
        return cy.get('.cart-icon');
    }

    getLoginButton() {
        return cy.get('.login-btn'); 
    }
}

export default HeaderPage;
