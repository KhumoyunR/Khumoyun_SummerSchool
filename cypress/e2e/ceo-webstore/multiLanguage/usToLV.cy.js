import Global from '../../../pageElements/Global'

describe('Test to check functionalities of multi language', () => {
    // https://tdlschool.atlassian.net/browse/TSS22N-100
    it('Switching language from English to Latvian', () => {
        cy.login(Cypress.env('email'), Cypress.env('password'))
        cy.visit('/us')
        Global.elements.sideBarBurger().click()
        Global.elements.languageOption().click()
        cy.contains('LV').click()
    })
})