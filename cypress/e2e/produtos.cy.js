/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

describe('Funcionalidade pagina de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos/')
        
    });

    it('Deve selecionar um produto', () => {

        cy.get('[class="product-block grid"').first().click()
        
    });

    it('Deve selecionar ao carrinho', () => {

        var quant = 3 

        cy.get('[class="product-block grid"').first().click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quant)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quant)
        
    });
    
});

