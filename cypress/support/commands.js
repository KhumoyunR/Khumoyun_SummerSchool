import Login from '../pageElements/Login'
import Home from '../pageElements/Home'

Cypress.Commands.add('getByTestId', (id) => {
    cy.get(`[data-testid=${id}]`)
})

Cypress.Commands.add('login', (email, password) => {
    cy.session([email, password], () => {
        cy.visit('/')
        Login.elements.emailInput().should('be.visible')
        Login.elements.passwordInput().should('be.visible')
        Login.elements.signInButton().should('be.visible')
        Login.fillEmail(email)
        Login.fillPassword(password)
        Login.elements.signInButton().click()
        Home.elements.headerLink().should('be.visible')
    })
})