import Login from '../../../pageElements/Login'
import Signup from '../../../pageElements/Signup'

describe('Test to check functionality of input fields in Sign up page', () => {
    before(() => {
        cy.visit('/')
        Login.elements.joinUsButton().click()
    })

    // https://tdlschool.atlassian.net/browse/TSS22N-60
    it('Sign up with already used email', () => {
        Signup.fillFirstName('maksis')
        Signup.fillLastName('paksis')
        Signup.fillEmail('abc.abc@gmail.com')
        Signup.fillPassword('123')
        Signup.elements.joinButton().click()
    })
})
