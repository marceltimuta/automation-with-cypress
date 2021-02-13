/// <reference types="cypress" />

context('Login', () => {
    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/login')
    })

    it('should login', () => {
        cy.get('#username')
          .type('tomsmith').should('have.value', 'tomsmith')

          .get('#password')
          .type('SuperSecretPassword!')

        cy.get('.radius').click()
        cy.location('pathname').should('include', 'secure')

        cy.get('#flash').should('contain','You logged into a secure area!')
    });

})