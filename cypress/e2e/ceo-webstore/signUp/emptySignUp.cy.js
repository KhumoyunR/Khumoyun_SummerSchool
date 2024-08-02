import Login from '../../../pageElements/Login'
import Signup from '../../../pageElements/Signup'

describe('Test to check functionality of mandatory input fields in Sign up page', () => {
    // https://tdlschool.atlassian.net/browse/TSS22N-51
    it('Leave mandatory fields empty and press "Join"', () => {
        cy.visit('/')
        Login.elements.joinUsButton().click()
        Signup.elements.joinButton().click()
    })
})