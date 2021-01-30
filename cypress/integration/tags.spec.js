// <reference types="cypress" />
context('Tags' ,()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000')                 
    })

    it('this must return the tags that of the services',()=>{
        cy.get('span').contains('tag')
    })
})