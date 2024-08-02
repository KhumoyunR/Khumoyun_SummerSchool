import Product from '../../../pageElements/Product'

describe('Test to check functionalities of multi language', () => {
    // https://tdlschool.atlassian.net/browse/TSS22N-188
    it('Product description language should correspond to the chosen language', () => {
        cy.login(Cypress.env('email'), Cypress.env('password'))
        cy.visit('/lv')
        Product.elements.productByID().click()
        Product.elements
            .productDescription()
            .should(
                'not.contain.text',
                'Reimagine the feeling of a classic T-shirt.'
            )
    })
})