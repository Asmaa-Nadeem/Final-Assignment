/// <reference types="Cypress" />
import userCredentials from '../fixtures/userCredentials.json'

describe('registration test cases', () => {
    
  it('fields are required', () => {
    cy.openRegistrationPage()
    cy.checkRequiredFields()
    cy.checkNonRequiredFields()
  })

  it('register an user', () => {
    cy.openRegistrationPage()
    cy.registerAnUser(userCredentials.firstName, userCredentials.lastName, userCredentials.telephone, userCredentials.email,
      userCredentials.password, userCredentials.subscribe)
    cy.myAccountIsOpened()
  })

})