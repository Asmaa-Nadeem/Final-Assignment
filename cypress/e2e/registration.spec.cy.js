/// <reference types="Cypress" />
import userCredentials from '../fixtures/userCredentials.json'

describe('registration test cases', () => {
  it('fields are required', () => {
    cy.openRegistrationPage()
    cy.isRequired('#input-firstname')
    cy.isRequired('#input-lastname')
    cy.isRequired('#input-email')
    cy.isRequired('#input-telephone')
    cy.isRequired('#input-password')
    cy.isRequired('#input-confirm')
    cy.isNotRequired('[name="newsletter"]')
  })

  it('register an user', () => {
    cy.openRegistrationPage()
    cy.registerAnUser(userCredentials.firstName, userCredentials.lastName, userCredentials.telephone,
      userCredentials.password, userCredentials.subscribe)
    cy.url().should('include', 'account/account')
  })

})