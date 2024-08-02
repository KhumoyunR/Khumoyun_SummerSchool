import Product from '../../pageElements/Product'
import Cart from '../../pageElements/Cart'

describe('Test to check functionalities of discount', () => {
    // https://tdlschool.atlassian.net/browse/TSS22N-320
    it('apply discount code', () => {
        cy.login(Cypress.env('email'), Cypress.env('password'))
        cy.visit('/store')
        Product.elements.productByHref().click()
        Product.elements.sizeOptions('S').click()
        Product.elements.colorOptions('Black').click()
        Product.elements.addToCartButton().click()
        Product.elements.addToCartIcon().click()
        Cart.elements.discountButton().click({ force: true }) // I used {force: true} to click button, because button that should be clicked is covered by pop-up window and results an error
        Cart.elements.discountInput().type('SUMMERSCHOOL', { force: true })
        Cart.elements.discountApply().click()
        Cart.elements.discountCode().contains('SUMMERSCHOOL')
        Cart.elements.discountAmount().contains('10%')
        Cart.elements.discountRemove().click()
        Cart.elements.productRemove().click()
        cy.get('.border-ui-tag-blue-border').should('not.exist')
    })
})