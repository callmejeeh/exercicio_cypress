/// <reference types="cypress" />

describe ('Testes para a página de contatos', ()=>{
    beforeEach(() =>{
        cy.visit('https://agenda-contatos-react.vercel.app')
    })


    it('Deve adicionar um contato'), ()=>{
        cy.get('input[type="text"]').type('Ana Maria')
        cy.get('input[type="email"]').type('ana@teste.com')
        cy.get('input[type="tel"]').type('4812345678')
        cy.get('.adicionar').click()
        cy.screenshot('tela-adicao')
    }

    it('Deve Editar contato', ()=>{
        cy.get('.edit').first().click()
        cy.get('input[type="email"]').type('bruna.costa@ebac.com.br')
        cy.get('.alterar').click()
        cy.screenshot('tela-edicao')
    })

    it('Deve remover contato', ()=>{
        cy.get('.delete').first().click()
        cy.screenshot('tela-remocao')
    })
})