/// <reference types="cypress" />

class HomePage{

    validateHomePage(){
        cy.url().should('include', 'account/account')
    }
    
    get myAccountNavbar(){
        return cy.get('a[title="My Account"]')
    }

    get logoutOption(){
        return cy.contains('Logout')
    }

    logoutUser(){
        this.myAccountNavbar.should('be.visible').click()
        this.logoutOption.should('be.visible').click()
    }

}export default new HomePage()