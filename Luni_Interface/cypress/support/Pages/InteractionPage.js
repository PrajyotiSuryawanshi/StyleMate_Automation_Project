class InteractionsPage {
    visit() {
        cy.visit('https://luni-interface-029.vercel.app/category/men'); 
    }

    getDropdown() {
        return cy.get('div ul li'); 
    }

    selectDropdownOption(optionText) {
        this.getDropdown().select(optionText);
    }
}

export default InteractionsPage;
