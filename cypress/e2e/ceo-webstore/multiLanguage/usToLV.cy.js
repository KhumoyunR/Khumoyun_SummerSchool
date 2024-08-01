import Global from "../../../pageElements/Global"

describe('Test to check functionalities of multi language', () => {
    const EMAIL = Cypress.env('email')
    const PASSWORD = Cypress.env('password')

    before(() => {
        cy.login(EMAIL, PASSWORD)
    })

    // https://tdlschool.atlassian.net/browse/TSS22N-100
    it('Switching language to Latvian', () => {
        cy.visit('/lv')
        Global.elements.sideBarBurger().click()
        Global.elements.languageOption().click()
        cy.contains('US').click()
    })
})