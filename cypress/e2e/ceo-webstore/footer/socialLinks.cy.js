describe('Test to check functionalities of social links', () => {
    const socialLinks = {
        web: 'https://www.testdevlab.com/',
        linkedIn: 'https://www.linkedin.com/company/testdevlab/',
        facebook: 'https://www.facebook.com/TestDevLab/',
        x: 'https://twitter.com/testdevlab',
    }

    beforeEach(() => {
        cy.login(Cypress.env('email'), Cypress.env('password'))
    })

    // https://tdlschool.atlassian.net/browse/TSS22N-315
    Object.values(socialLinks).forEach((link) => {
        it(`check footer social icon link for ${link}`, () => {
            cy.visit('/')
            cy.getByHref(link)
        })
    })
})
