import Login from '../../../pageElements/Login'
import Signup from '../../../pageElements/Signup'

describe('Test to check functionality of mandatory input fields in Sign up page', () => {
    
    before(() => {
        cy.visit('/')
        Login.elements.joinUsButton().click()
    })

    // https://tdlschool.atlassian.net/browse/TSS22N-51
    it('Leave mandatory fields empty and press "Join"', () => {
        Signup.elements.joinButton().click()
    })
})