/// <reference types="cypress" />

import enderecoPage from "../support/page-objects/endereco.page";
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
        
    });
    it('Deve fazer cadastro de faturamento com sucesso', () => {
        enderecoPage.editarEnderecoFaturamento('Daiane', 'Zardo', 'Ebac', 'Brasil', 'Rua Romualdo de Barros', '250', 'Florianopolis', 'Santa Catarina', '88040410', '51988665522', 'teste@teste.com')

        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

    });

    it('Deve fazer cadastro de faturamento com sucesso - Usando arquivo de dados', () => {
        enderecoPage.editarEnderecoFaturamento(
            dadosEndereco[0].nome,
            dadosEndereco[0].sobrenome,
            dadosEndereco[0].empresa,
            dadosEndereco[0].pais,
            dadosEndereco[0].endereco,
            dadosEndereco[0].numero,
            dadosEndereco[0].cidade,
            dadosEndereco[0].estado,
            dadosEndereco[0].cep,
            dadosEndereco[0].telefone,
            dadosEndereco[0].email,
            )

        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

    });
    
});