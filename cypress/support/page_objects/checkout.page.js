class Checkout {

    goToCheckOut({ firstName, lastName, address, cityName, country, state, postcode, phone, email }) {
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()

        cy.get('#billing_first_name').type(firstName)
        cy.get('#billing_last_name').type(lastName)

        cy.get('#select2-billing_country-container').click().type(country).click()
        cy.get('#billing_address_1').type(address)
        cy.get('#billing_city').type(cityName)
        cy.get('#select2-billing_state-container').click().type(state).click()
        cy.get('#billing_postcode').type(postcode)
        cy.get('#billing_phone').type(phone)
        cy.get('#billing_email').type(email)

        cy.get('.wc_payment_method.payment_method_cod > label').click()

        cy.get('.woocommerce-terms-and-conditions-checkbox-text').click()

        cy.get('#place_order').click()

    }

}

export default new Checkout()