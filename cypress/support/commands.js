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

Cypress.Commands.add('registerAnUser', (firstName, lastName, telephone, password, subscribe) => {
    //use faker library to generate random email
    const {faker} = require('@faker-js/faker');

    const email = faker.internet.email()
    cy.readFile("cypress/fixtures/userCredentials.json", (err, data) => {
      if (err) {
          return console.error(err);
      };
    }).then((data) => {
      data.email = email
      cy.writeFile("cypress/fixtures/userCredentials.json", JSON.stringify(data))
    })

    cy.get('#input-firstname').should('be.visible').type(firstName)
    cy.get('#input-lastname').should('be.visible').type(lastName)
    cy.get('#input-email').should('be.visible').type(email)
    cy.get('#input-telephone').should('be.visible').type(telephone)
    cy.get('#input-password').should('be.visible').type(password)
    cy.get('#input-confirm').should('be.visible').type(password)
    cy.get('[name="newsletter"]').should('be.visible').check(subscribe)
    cy.get('[name="agree"]').should('be.visible').check()

    //Workaround - to avoid infinite loading, website bug
    cy.window().document().then(function (doc) {
        doc.addEventListener('click', () => {
          setTimeout(function () { doc.location.reload() }, 5000)
        })
    })
    cy.get('input[value="Continue"]').as('btn').click()
})

Cypress.Commands.add('loginAnUser', (email, password) => {
    cy.get('#input-email').should('be.visible').type(email)
    cy.get('#input-password').should('be.visible').type(password)
    cy.get('input[value="Login"]').as('btn').click()
})

Cypress.Commands.add('errorIsDisplayed', (email, password) => {
    cy.get('.alert-danger').should('be.visible')
})

Cypress.Commands.add('generateFixture', () => {
  
   
})


