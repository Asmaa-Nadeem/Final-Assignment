/// <reference types="cypress" />

const {faker} = require('@faker-js/faker');

class RegisterPage{
    

    validateRegisterPage(){
        cy.url().should('include', 'account/register')
    }

    get firstNameField(){
        return cy.get('#input-firstname')
    }

    get lastNameField(){
        return cy.get('#input-lastname')
    }

    get emailField(){
        return cy.get('#input-email')
    }

    get telephoneField(){
        return cy.get('#input-telephone')
    }

    get passwordField(){
        return cy.get('#input-password')
    }

    get confirmPasswordField(){
        return cy.get('#input-confirm')
    }

    get newsletterOption(){
        return cy.get('[name="newsletter"]')
    }

    get registerBtn(){
        cy.window().document().then(function (doc) {
            doc.addEventListener('click', () => {
            setTimeout(function () { doc.location.reload() }, 5000)
            })
        })
        return cy.get('input[value="Continue"]')
    }

    get agreeOption(){
        return cy.get('[name="agree"]')
    }

    writeEmailToFile(email){
        cy.readFile("cypress/fixtures/userCredentials.json", (err, data) => {
            if (err) {
                return console.error(err);
            };
            }).then((data) => {
            data.email = email
            cy.writeFile("cypress/fixtures/userCredentials.json", JSON.stringify(data))
        })
    }

    registerUser(firstName, lastName, telephone, password, subscribe){

        const email = faker.internet.email()
        this.writeEmailToFile(email)
        this.firstNameField.should('be.visible').type(firstName)
        this.lastNameField.should('be.visible').type(lastName)
        this.emailField.should('be.visible').type(email)
        this.telephoneField.should('be.visible').type(telephone)
        this.passwordField.should('be.visible').type(password)
        this.confirmPasswordField.should('be.visible').type(password)
        this.newsletterOption.should('be.visible').check(subscribe)
        this.agreeOption.should('be.visible').check()

        this.registerBtn.as('btn').click()
    }

}export default new RegisterPage()