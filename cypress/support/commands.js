// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, { log: false })
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('goToPage', (page) => {
    cy.visit(page)
})

Cypress.Commands.add('addProduct', ({ nome, size, color }) => {
    cy.goToPage('/')
    cy.get('[class="product-block grid"]').contains(nome).click()
    cy.get('.single_add_to_cart_button').click()

    cy.get('.button-variable-item-' + size).click()
    cy.get('.button-variable-item-' + color).click()
    cy.get('.single_add_to_cart_button').click()
})
