import Global from '../../../pageElements/Global'
import Store from '../../../pageElements/Store'

// https://tdlschool.atlassian.net/browse/TSS22N-171
describe('e2e test to check functionalities of store page', () => {

    it('test different views of products in store page', () => {
        cy.login(Cypress.env('email'), Cypress.env('password'))
        cy.visit('/')
        Global.navigateSideBar.openPage('Store')
        Store.elements.tableView().click()
        Store.elements.tablePageTitle().contains('Products table view')
        Store.elements.storeView().click()
    })
})