/// <reference types="Cypress" />
import userCredentials from '../fixtures/userCredentials.json'
import HomePage from '../pageobjects/homePage'
import LoginPage from '../pageobjects/loginPage'

describe('login test cases', () => {

    beforeEach('Display login page', () => {
        cy.openPage('Login')
        LoginPage.validateLoginPage()
    })
    
    it('login Testcase for valid user', () => {
        LoginPage.loginUser(userCredentials.email, userCredentials.password)
        HomePage.validateHomePage()
        HomePage.logoutUser()
        LoginPage.validateLogoutPage()
    })

    it('loginTest case for invalid user - invalid email', () => {
        LoginPage.loginUser(userCredentials.invalidEmail, userCredentials.password)
        LoginPage.errorIsDisplayed()
    })

    it('login User with invalid password', () => {
        LoginPage.loginUser(userCredentials.email, userCredentials.invalidPassword)
        LoginPage.errorIsDisplayed()
    })

    it('Incorrect test case - Testcase failed screenshot', () => {
        LoginPage.loginUser("failedlogin", userCredentials.invalidPassword)
        HomePage.validateHomePage()
    })

})