/// <reference types="cypress" />

describe('Funcionalidade Página de produtos', () => {
    
    beforeEach(() => {
        cy.visit('produtos')
    });

        it('Deve selecionar um produto da lista', () => {
            cy.get('[class="product-block grid"]').first().click()
        });

        it.only('Deve adicionar um produto no carrinho', () => {
            cy.get('[class="product-block grid"]').first().click()
            cy.get('.button-variable-item-XS').click()
            cy.get('.button-variable-item-Red').click()
            cy.get('.input-text').clear().type('2')
            cy.get('.single_add_to_cart_button').click()

            cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 2)
        });


});