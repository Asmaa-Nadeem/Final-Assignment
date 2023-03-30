/// <reference types="Cypress" />
import userCredentials from '../fixtures/userCredentials.json'
import HomePage from '../pageobjects/homePage'
import LoginPage from '../pageobjects/loginPage'

describe('card operations test cases', () => {

    before('open home page', () => {
        cy.openPage('Login')
        LoginPage.validateLoginPage()
        LoginPage.loginUser(userCredentials.email, userCredentials.password)
        HomePage.validateHomePage()
    })

    it('search a product', () => {

    })

    it('add product to cart', () => {

    })

    it('update product in cart', () => {

    })

    it('delete product from cart', () => {

    })

    after('logout', () => {
        HomePage.logoutUser()
        LoginPage.validateLogoutPage()
    })
})