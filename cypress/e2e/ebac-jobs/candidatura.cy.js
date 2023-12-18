/// <reference types="cypress" />

describe ('Testes para a página de candidatura', ()=>{
    beforeEach(() =>{
        cy.visit('https://ebac-jobs-e2e.vercel.app')
    })

    it('Deve levar o usuário até o formulário', ()=>{
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input').should('have.length', 7)
        cy.screenshot('tela-inscricao')

    })
    it('Deve preencher o formulário de inscrição', ()=>{
        cy.get('.Vaga_vagaLink__DeFkk').first.click()
        cy.get('input[name="nome-completo"]').type('Jéssica Thuller')
        cy.get('input[name="email"]').type('telefone@teste.com')
        cy.get('input[name="telefone"]').type('4812345678')
        cy.get('input[name="endereco"]').type('Rua dos Bobos, 0')
        cy.get('#linux').check()
        cy.get('select[name="escolaridade"]').select('outros')
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('window:alert', (conteudo)=>{
            expect(conteudo).contain('Obrigado pela candidatura!')
        })
        cy.screenshot('tela-inscricao-preenchida')
    })

})