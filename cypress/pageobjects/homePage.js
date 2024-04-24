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
        // this.productName.array.forEach(element => {
        //     cy.SelectProduct(element)
        // });
      
    }


}export default new HomePage()