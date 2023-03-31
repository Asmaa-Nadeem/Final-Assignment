/// <reference types="cypress" />

class CartPage{
    
    validateProductInCart(productName){
        cy.get('.text-left a').should('be.visible').contains(productName)
    }

}export default new CartPage()