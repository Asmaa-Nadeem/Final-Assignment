Cypress.Commands.add('openPage', (pageName) => {
    cy.visit(Cypress.config('baseURL'))
    cy.get('a[title="My Account"]').should('be.visible').click()
    cy.contains(pageName).should('be.visible').click()
})

Cypress.Commands.add('isRequired', (selector) => {
    selector.closest('.form-group').should('have.class', 'required')
})

Cypress.Commands.add('isNotRequired', (selector) => {
    selector.closest('.form-group').should('not.have.class', 'required')
})


