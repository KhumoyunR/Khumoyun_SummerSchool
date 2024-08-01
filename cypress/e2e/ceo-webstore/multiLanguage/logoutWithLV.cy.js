import Global from '../../../pageElements/Global'

describe('Test to check functionalities of multi language', () => {
    // https://tdlschool.atlassian.net/browse/TSS22N-166
    it('Switching language to Latvian and logout to check Sign in page', () => {
        cy.login(Cypress.env('email'), Cypress.env('password'))
        cy.visit('/us')
        Global.elements.sideBarBurger().click()
        Global.elements.languageOption().click()
        cy.contains('LV').click()
        Global.elements.logOutButton().click()
        cy.contains('h1', 'Laipni lūdzam atpakaļ')
    })
})
