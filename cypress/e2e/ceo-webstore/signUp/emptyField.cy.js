import Login from '../../../pageElements/Login'
import Signup from '../../../pageElements/Signup'

describe('Test to check functionality of mandatory input fields in Sign up page', () => {
    
    before(() => {
        cy.visit('/')
        Login.elements.joinUsButton().click()
    })

    // https://tdlschool.atlassian.net/browse/TSS22N-40
    it('Leave one or more mandatory field empty', () => {
        //Signup.fillFirstName('')
        Signup.fillLastName('Max')
        //Signup.fillEmail('')
        Signup.fillPassword('1234')
        Signup.elements.joinButton().click()
    })
})