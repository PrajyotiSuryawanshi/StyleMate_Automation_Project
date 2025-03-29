class CartPage {
    
    getCartButton() {
      return cy.get('.control');
    }
  
   
    getCartPopup() {
      return cy.get('.MuiBox-root'); 
    }
  
   
    getCartItems() {
      return cy.get('cart__item__card'); 
    }
  
    
    getCloseButton() {
      return cy.get('.MuiSvgIcon-root');
    }
  
    
    openCart() {
      this.getCartButton().first().click();
    }
  
    closeCart() {
      this.getCloseButton().click();
    }
  
    verifyCartVisible() {
      this.getCartPopup().should('be.visible');
    }
  
    verifyItemInCart(itemName) {
      this.getCartItems().contains(itemName).should('exist');
    }
  }
  
  export default new CartPage();
  