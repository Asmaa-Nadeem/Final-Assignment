/// <reference types="cypress" />

class SearchPage{
    
    validateSearchPage(productName){
        cy.url().should('include', 'product/search&search=' + productName)
    }

    validateSearchedItem(productName){
        cy.get('.caption a').should('be.visible').contains(productName)
    }

    get addToCartBtn(){
        return cy.get('span').should('be.visible').contains('Add to Cart').parent()
    }

    get successAlert(){
        return cy.get('.alert-success')
    }

    clickAddToCartBtn(){
        this.addToCartBtn.should('be.visible').click()
    }

    successIsDisplayed(){
        this.successAlert.should('be.visible')
    }

    openCartPage(){
        cy.visit(`${Cypress.config('baseURL')}` + 'index.php?route=checkout/cart')
    }

}export default new SearchPage()