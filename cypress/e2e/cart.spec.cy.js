/// <reference types="Cypress" />
import userCredentials from '../fixtures/userCredentials.json'
import CartPage from '../pageobjects/cartPage'
import homePage from '../pageobjects/homePage'
import LoginPage from '../pageobjects/loginPage'
import SearchPage from '../pageobjects/searchPage'

describe('cart operations test cases', () => {
    const productName = ['HTC', 'Apple Cinema 30', 'Samsung SyncMaster 941BW']



    before('open home page', () => {
        cy.openPage('Login')
        LoginPage.validateLoginPage()
        LoginPage.loginUser(userCredentials.email, userCredentials.password)
        homePage.validateHomePage()
    })

    it('search a product', () => {

        cy.on("fail", (err, runnable) => {
            cy.log(err.message);
            cy.log("Invalid product");
            return false;

        });


        cy.wrap(productName).then((Array) => {
            const randomIndex = Math.floor(Math.random() * Array.length)
            const randomItem = Array[randomIndex]
            cy.log('Selected Item:' + randomItem)
            homePage.searchField.type(randomItem)
            homePage.searchBtn.click()
            //SearchPage.validateSearchPage(randomItem)
            //SearchPage.validateSearchedItem(randomItem)
        })


    })

    it('add product to cart', () => {

        cy.on("fail", (err, runnable) => {
            cy.log(err.message);
            cy.log("Invalid product");
            return false;

        });

        SearchPage.clickAddToCartBtn()
        SearchPage.successIsDisplayed()
        SearchPage.openCartPage()
        CartPage.validateProductInCart(productName)
    })

    it('update product in cart', () => {
        cy.on("fail", (err, runnable) => {
            cy.log(err.message);
            cy.log("Invalid product");
            return false;

        });
        const updateCount = 2
        CartPage.updateQuantityField(updateCount)
        CartPage.clickUpdateBtn()
        CartPage.successIsDisplayed()
        CartPage.confirmTotalCartCount(updateCount)
    })

    it('delete product from cart', () => {
        CartPage.clickDeleteBtn()
        CartPage.confirmTotalCartCount(0)
    })

    // after('logout', () => {
    //     homePage.logoutUser()
    //     LoginPage.validateLogoutPage()
    // })
})