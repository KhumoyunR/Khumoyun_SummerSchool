class Home {
    elements = {
        headerLink: () => cy.getByTestId(`nav-store-link`), // TODO: why use ticks here?
        productLink: () => cy.getByTestId('product-wrapper'),
    }
}

export default new Home()
