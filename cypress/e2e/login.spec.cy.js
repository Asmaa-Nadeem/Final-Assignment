/// <reference types="Cypress" />
import userCredentials from '../fixtures/userCredentials.json'

describe('login test cases', () => {
    
    it('login valid user', () => {
        cy.openLoginPage()
        cy.loginAnUser(userCredentials.email, userCredentials.password)
        cy.url().should('include', 'account/account')
    })

    it('login invalid user - invalid email', () => {
        cy.openLoginPage()
        cy.loginAnUser(userCredentials.invalidEmail, userCredentials.password)
        cy.errorIsDisplayed()
    })

    it('login invalid user - invalid password', () => {
        cy.openLoginPage()
        cy.loginAnUser(userCredentials.email, userCredentials.invalidPassword)
        cy.errorIsDisplayed()
    })

})