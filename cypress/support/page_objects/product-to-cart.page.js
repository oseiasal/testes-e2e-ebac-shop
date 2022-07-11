class ProductToCart {

    addProduct({ nome, size, color }) {
        cy.visit('/')
        cy.get('[class="product-block grid"]').contains(nome).click()
        cy.get('.single_add_to_cart_button').click()

        cy.get('.button-variable-item-' + size).click()
        cy.get('.button-variable-item-' + color).click()
        cy.get('.single_add_to_cart_button').click()
    }



}

export default new ProductToCart()