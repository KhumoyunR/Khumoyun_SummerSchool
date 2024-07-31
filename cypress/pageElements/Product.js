class Product {
    elements = {
        product: () => cy.getByTestId('product-wrapper').first(),
        sizeOptions: (sizeName) =>
            cy.getByTestId('product-options').contains('button', sizeName),
        colorOptions: (colorName) =>
            cy.getByTestId('product-options').contains('button', colorName),
        addToCartButton: () => cy.getByTestId('add-product-button'),
        addToCartIcon: () => cy.getByTestId('nav-cart-link'),
    }
}

export default new Product()
