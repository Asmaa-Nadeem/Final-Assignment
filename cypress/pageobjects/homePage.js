/// <reference types="cypress" />

class HomePage{

    validateHomePage(){
        cy.url().should('include', 'account')
    }
    
    get myAccountNavbar(){
        return cy.get('a[title="My Account"]')
    }

    get logoutOption(){
        return cy.contains('Logout')
    }

    get searchField(){
        return cy.get('[name="search"]')
    }

    get searchBtn(){
        return cy.get('button.btn-default')
    }

    logoutUser(){
        this.myAccountNavbar.should('be.visible').click()
        this.logoutOption.should('be.visible').click()
    }

    searchProduct(productName){
        this.searchField.should('be.visible').type(productName)
        this.searchBtn.should('be.visible').click()
    }

}export default new HomePage()