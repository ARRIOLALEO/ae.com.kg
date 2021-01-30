// <reference  types="cypress" />
context('Questions',()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })
    it('this show that the module of questions is working well',()=>{
        cy.get('h4').contains('Do I have to allow the use of cookes?')
    })
})