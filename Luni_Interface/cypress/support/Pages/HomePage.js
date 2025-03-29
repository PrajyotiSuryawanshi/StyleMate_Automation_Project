class HomePage {
  
    visit() {
        cy.visit('https://luni-interface-029.vercel.app/');
    }

    


    getHeaderLogo() {
        return cy.get('img'); 
    }

    clickLoginButton() {
        cy.get('a.chakra-link.css-0').should('be.visible').first().click(); 
}
}

export default HomePage;