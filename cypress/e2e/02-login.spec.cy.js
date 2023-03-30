/// <reference types="Cypress" />
import userCredentials from '../fixtures/userCredentials.json'
import HomePage from '../pageobjects/homePage'
import LoginPage from '../pageobjects/loginPage'

describe('login test cases', () => {

    beforeEach('open login page', () => {
        cy.openPage('Login')
        LoginPage.validateLoginPage()
    })
    
    it('login valid user', () => {
        LoginPage.loginUser(userCredentials.email, userCredentials.password)
        HomePage.validateHomePage()
        HomePage.logoutUser()
        LoginPage.validateLogoutPage()
    })

    it('login invalid user - invalid email', () => {
        LoginPage.loginUser(userCredentials.invalidEmail, userCredentials.password)
        LoginPage.errorIsDisplayed()
    })

    it('login invalid user - invalid password', () => {
        LoginPage.loginUser(userCredentials.email, userCredentials.invalidPassword)
        LoginPage.errorIsDisplayed()
    })

    it('wrong test case - to test failed screenshot', () => {
        LoginPage.loginUser("failedlogin", userCredentials.invalidPassword)
        HomePage.validateHomePage()
    })

})