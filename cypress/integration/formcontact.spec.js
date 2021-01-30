// <reference types="cypress"/>
context('Form',()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })
    it(`here we check the form of contact on the footer`,()=>{
        cy.get('.form-contact').within(()=>{
            cy.get('input').invoke('attr', 'placeholder').should('contain', 'Full Name')
        })
    })
})