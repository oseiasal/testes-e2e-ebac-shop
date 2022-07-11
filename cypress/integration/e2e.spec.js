/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import ProductToCart from '../support/page_objects/product-to-cart.page'
import Checkout from '../support/page_objects/checkout.page'

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const country = "Brasil";
    const address = faker.address.streetName();
    const cityName = faker.address.cityName();
    const state = "São Paulo";
    const postcode = faker.address.zipCode("########");
    const phone = faker.phone.number('+55 11 9####-####')
    const email = `${firstName}.${lastName}@gmail.com`

    it('Adicionar produtos ao carrinho e fazer checkout', () => {
        cy.fixture('produtos')
            .then((produtos) => {
                produtos.map((produto) => {
                    ProductToCart.addProduct({ nome: produto.nome, color: produto.color, size: produto.size })
                })
            })

        Checkout.goToCheckOut({
            firstName,
            lastName,
            address,
            cityName,
            country,
            state,
            postcode,
            phone,
            email
        })
    });

})