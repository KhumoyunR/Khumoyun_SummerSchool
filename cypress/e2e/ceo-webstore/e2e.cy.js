import Global from '../../pageElements/Global'
import Home from '../../pageElements/Home'
import Product from '../../pageElements/Product'
import Checkout from '../../pageElements/Checkout'

// https://tdlschool.atlassian.net/browse/TSS22N-261
describe('e2e test to check functionalities of webstore', () => {
    const EMAIL = Cypress.env('email')
    const PASSWORD = Cypress.env('password')

    beforeEach(() => {
        cy.login(EMAIL, PASSWORD)
    })

    // https://tdlschool.atlassian.net/browse/TSS22N-273
    /* If you want to skip or do not run some of the scenarios again and again, you can add '.skip()' after 'it' 
    If you want to run just one scenario, then you can use '.only()' after 'it'. */
    it('logs in to webstore & opens Store page from sidebar', () => {
        cy.visit('/')
        Home.elements.headerLink().contains('Store of Excellence')
        Home.elements.productLink().should('have.length', 4)
        Global.navigateSideBar.openPage('Store')
    })

    // https://tdlschool.atlassian.net/browse/TSS22N-280
    it('add a T-Shirt to cart', () => {
        cy.visit('/store')
        Product.elements.productByHref().click()
        Product.elements.sizeOptions('S').click()
        Product.elements.colorOptions('Black').click()
        Product.elements.addToCartButton().click()
        Product.elements.addToCartIcon().click()
    })

    // https://tdlschool.atlassian.net/browse/TSS22N-289
    it('fill data in checkout page', () => {
        cy.visit('/checkout?step=address')
        Checkout.elements.firstName().click().type('Bob')
        Checkout.elements.lastName().click().type('Marley')
        Checkout.elements.address().click().type('Dammes iela 1')
        Checkout.elements.postalCode().click().type('LV-1069')
        Checkout.elements.city().click().type('Riga')
        Checkout.elements.country().select('Latvia')
        Checkout.elements.submitAddress().click()
        Checkout.elements.deliveryOption().contains('FakeEx Standard').click()
        Checkout.elements.submitDelivery().click()
        Checkout.elements.paymentOption().first()
        Checkout.elements.submitPayment().click()
        Checkout.elements.placeOrder().click()
        cy.url().should('include', '/order/confirmed/order') // this line of the code checks of the content of the URL for given text
        cy.url().then((url) => {
            // if previous step passes successfully, it saves URL to re-use in the next scenarios
            Cypress.env('orderUrl', url)
        })
    })

    // https://tdlschool.atlassian.net/browse/TSS22N-297
    it('logout after successful order', () => {
        cy.visit(Cypress.env('orderUrl')) // in this step re-used the previous saved URL
        Global.elements.sideBarBurger().click()
        Global.elements.logOutButton().click()
    })
})
