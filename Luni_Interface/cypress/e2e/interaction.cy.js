import InteractionsPage from "../support/Pages/InteractionPage";

describe("UI Interaction Tests", () => {
    const interactionsPage = new InteractionsPage();

    beforeEach(() => {
        interactionsPage.visit();
    });

    it("should select an option from the dropdown", () => {
        interactionsPage.selectDropdownOption("Option 1");
        interactionsPage.getDropdown().should('have.value', 'Option 1');
    });
});
