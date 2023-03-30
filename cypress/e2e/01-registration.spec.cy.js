/// <reference types="Cypress" />
import userCredentials from '../fixtures/userCredentials.json'
import HomePage from '../pageobjects/homePage'
import LoginPage from '../pageobjects/loginPage'
import RegisterPage from '../pageobjects/registerPage'


describe('registration test cases', () => {
  
  before('open registeration page', ()=>{
    cy.openPage('Register')
    RegisterPage.validateRegisterPage()
  })

  it('fields are required', () => {
    cy.isRequired( RegisterPage.firstNameField )
    cy.isRequired( RegisterPage.lastNameField )
    cy.isRequired( RegisterPage.emailField )
    cy.isRequired( RegisterPage.telephoneField )
    cy.isRequired( RegisterPage.passwordField )
    cy.isRequired( RegisterPage.confirmPasswordField)
    cy.isNotRequired( RegisterPage.newsletterOption )
  })

  it('register an user', () => {
    RegisterPage.registerUser(userCredentials.firstName, userCredentials.lastName, userCredentials.telephone,
      userCredentials.password, userCredentials.subscribe)
    HomePage.validateHomePage()
  })

  after('logout user', ()=>{
    HomePage.logoutUser()
    LoginPage.validateLogoutPage()
  })

})