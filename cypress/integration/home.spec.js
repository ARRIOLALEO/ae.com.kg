// <reference types="cypress" />
context('Home', ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })

it('shoud find the tille of the home page', ()=>{
    cy.get('div').contains('Разработка сайтов');
})
});