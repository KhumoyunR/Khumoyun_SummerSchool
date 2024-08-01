import Global from "../../../pageElements/Global"

describe('Test to check functionalities of multi language', () => {

    // https://tdlschool.atlassian.net/browse/TSS22N-141
    it('Switching language from Latvian to English', () => {
        cy.login(Cypress.env('email'), Cypress.env('password'))
        cy.visit('/lv')
        Global.elements.sideBarBurger().click()
        Global.elements.languageOption().click()
        cy.contains('US').click()
    })
})