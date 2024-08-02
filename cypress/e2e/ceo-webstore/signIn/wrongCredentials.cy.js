import Login from '../../../pageElements/Login'

describe('Test to check functionality of Sign In', () => {
    // https://tdlschool.atlassian.net/browse/TSS22N-19
    it('Sign in with not registered credentials', () => {
        cy.visit('/')
        Login.fillEmail('not.registered@gmail.com')
        Login.fillPassword('noPassword')
        Login.elements.signInButton().click()
    })
})