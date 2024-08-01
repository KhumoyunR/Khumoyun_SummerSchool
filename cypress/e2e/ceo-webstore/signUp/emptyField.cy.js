import Login from '../../../pageElements/Login'
import Signup from '../../../pageElements/Signup'

describe('Test to check functionality of mandatory input fields in Sign up page', () => {
    before(() => {
        cy.visit('/')
        Login.elements.joinUsButton().click()
    })

    // https://tdlschool.atlassian.net/browse/TSS22N-40
    /* You can comment or uncomment any of these lines expect the last line. 
    If the line is commented, it means that it leaves this/these input field/s empty during test
    If the life is uncommented, it means that input field will be filled with input data during test */
    it('Leave one or more mandatory field empty', () => {
        //Signup.fillFirstName('Bob')
        Signup.fillLastName('Max')
        //Signup.fillEmail('qwert.abc@gmail.com')
        Signup.fillPassword('1234')
        Signup.elements.joinButton().click()
    })
})
