Cypress.Commands.add('openRegistrationPage', (selector) => {
    cy.visit('https://opencart.abstracta.us/')
    cy.get('a[title="My Account"]').should('be.visible').click()
    cy.contains('Register').should('be.visible').click()
    cy.get('#content h1').should('have.text', 'Account')
})

Cypress.Commands.add('openLoginPage', (selector) => {
    cy.visit('https://opencart.abstracta.us/')
        cy.get('a[title="My Account"]').should('be.visible').click()
        cy.contains('Login').should('be.visible').click()
        cy.url().should('include', 'account/login')
})

Cypress.Commands.add('isRequired', (selector) => {
    cy.get(selector).closest('.form-group').should('have.class', 'required')
})

Cypress.Commands.add('isNotRequired', (selector) => {
    cy.get(selector).closest('.form-group').should('not.have.class', 'required')
})

Cypress.Commands.add('setValue', (selector, value) => {
    cy.get(selector).should('be.visible').type(value)
})

Cypress.Commands.add('clickRadioBtn', (selector, value) => {
    cy.get(selector).should('be.visible').check(value)
})

Cypress.Commands.add('clickCheckBtn', (selector, value) => {
    cy.get(selector).should('be.visible').check()
})

Cypress.Commands.add('clickBtn', (selector) => {
    //Workaround - to avoid infinite loading, website bug
    cy.window().document().then(function (doc) {
        doc.addEventListener('click', () => {
          setTimeout(function () { doc.location.reload() }, 5000)
        })
    })
    cy.get(selector).as('btn').click()
})

Cypress.Commands.add('checkRequiredFields', (selector) => {
    cy.isRequired('#input-firstname')
    cy.isRequired('#input-lastname')
    cy.isRequired('#input-email')
    cy.isRequired('#input-telephone')
    cy.isRequired('#input-password')
    cy.isRequired('#input-confirm')
    cy.isNotRequired('[name="newsletter"]')
})

Cypress.Commands.add('checkNonRequiredFields', (selector) => {
    cy.isNotRequired('[name="newsletter"]')
})

Cypress.Commands.add('registerAnUser', (firstName, lastName, telephone, email, password, subscribe) => {
    cy.setValue('#input-firstname', firstName)
    cy.setValue('#input-lastname', lastName)
    cy.setValue('#input-email', email)
    cy.setValue('#input-telephone', telephone)
    cy.setValue('#input-password', password)
    cy.setValue('#input-confirm', password)
    cy.clickRadioBtn('[name="newsletter"]', subscribe)
    cy.clickCheckBtn('[name="agree"]') 
    cy.clickBtn('input[value="Continue"]')
})

Cypress.Commands.add('myAccountIsOpened', (selector) => {
    cy.url().should('include', 'index')
})

Cypress.Commands.add('loginAnUser', (email, password) => {
    cy.setValue("#input-email", email)
    cy.setValue('#input-password', password)
    cy.get('input[value="Login"]').as('btn').click()
})

Cypress.Commands.add('errorIsDisplayed', (email, password) => {
    cy.get('.alert-danger').should('be.visible')
})




