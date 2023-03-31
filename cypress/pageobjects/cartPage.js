/// <reference types="cypress" />

class CartPage{
    
    validateProductInCart(productName){
        cy.get('.text-left a').should('be.visible').contains(productName)
    }

    get updateBtn(){
        cy.window().document().then(function (doc) {
            doc.addEventListener('click', () => {
            setTimeout(function () { doc.location.reload() }, 5000)
            })
        })
        return cy.get('button[data-original-title="Update"]')
    }

    get deleteBtn(){
        return cy.get('button[data-original-title="Remove"]')
    }

    get quantityField(){
        return cy.get('td input[type="text"]')
    }

    get successAlert(){
        return cy.get('.alert-success')
    }

    get cartTotalSpan(){
        return cy.get('#cart-total')
    }

    clickUpdateBtn(){
        this.updateBtn.click()
    }

    clickDeleteBtn(){
        this.deleteBtn.click()
    }

    updateQuantityField(quantity){
        this.quantityField.should('be.visible').clear().type(quantity)
    }

    successIsDisplayed(){
        this.successAlert.should('be.visible')
    }

    confirmTotalCartCount(count){
       this.cartTotalSpan.should('be.visible').contains(count + ' item(s)')
    }

}export default new CartPage()