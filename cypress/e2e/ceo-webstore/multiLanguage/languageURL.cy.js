import Global from '../../../pageElements/Global'

describe('Test to check functionalities of multi language', () => {
    // https://tdlschool.atlassian.net/browse/TSS22N-240
    it('Switching language to Latvian and verify the URL is corresponding', () => {
        cy.login(Cypress.env('email'), Cypress.env('password'))
        cy.visit('/us')
        Global.elements.sideBarBurger().click()
        Global.elements.languageOption().click()
        cy.contains('LV').click()
        cy.url().should('include', '/lv')
    })
})
