import cartPage from '../support/Pages/CartPage';

describe('Cart Popup Test', () => {
  beforeEach(() => {
    cy.visit('https://luni-interface-029.vercel.app/'); 
  });

  it('Should open cart popup and verify it is visible', () => {
    cartPage.openCart();
    cartPage.verifyCartVisible();
  });

  it('Should display added item in cart popup', () => {
   
    cy.get('.cart__item__card').first().click();

    cartPage.openCart();
    cartPage.verifyCartVisible();
    cartPage.verifyItemInCart('Product Name'); 
  });

  it('Should close the cart popup', () => {
    cartPage.openCart();
    cartPage.verifyCartVisible();
    cartPage.closeCart();
    cartPage.getCartPopup().should('not.be.visible');
  });
});
