import Login from '../../../pageElements/Login'

describe('Test to check functionality of button "Join us"', () => {

    // https://tdlschool.atlassian.net/browse/TSS22N-16
    it('Get redirected to Sign up', () => {
        cy.visit('/')
        Login.elements.joinUsButton().click()
    })
})