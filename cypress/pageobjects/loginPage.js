/// <reference types="cypress" />

class LoginPage{
    
    validateLoginPage(){
        cy.url().should('include', 'account/login')
    }

    validateLogoutPage(){
        cy.url().should('include', 'account/logout')
    }

    get emailField(){
        return cy.get('#input-email')
    }

    get passwordField(){
        return cy.get('#input-password')
    }

    get loginBtn(){
        return cy.get('input[value="Login"]')
    }

    get errorAlert(){
        return cy.get('.alert-danger')
    }

    loginUser(email, password){
        this.emailField.should('be.visible').type(email)
        this.passwordField.should('be.visible').type(password)
        this.loginBtn.click()
    }

    errorIsDisplayed(){
        this.errorAlert.should('be.visible')
    }

}export default new LoginPage()