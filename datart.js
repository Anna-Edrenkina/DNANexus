/// <reference types="cypress" />

// I hade an error "ufo is not founded" when i tried to get to the TV category, but probably it was not related with the bug in cypress test, but with the bug in HTML code on datart website"
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

Cypress.Commands.add('addTVtoCart', (position) => {
  cy.get('.item-cart').eq(position).click()
})

Cypress.Commands.add('closeCartDialog', () => {
  cy.get('.close').should('be.visible').click()
})

describe('Datart test', () => {
    it('Add two the most expensive TVs into shopping cart', () => {

      cy.visit('https://www.datart.cz')

      cy.get('button[id="c-p-bn"]').click()

      cy.get('.link-name').contains('Televize').click()
 
      cy.get('.category-tree-title').contains('Televize').click()

      cy.get('.sort-panel-select').select(3).should('have.value', '4')

      cy.url().should('contain', '/filter')

      cy.get('input[type="checkbox"]').check('1')

      // Waiting for "Dostupnost" filter to be applied
      cy.url().should('contain', '/v:-')

      // Using function for selecting TV
      cy.addTVtoCart(0)

      // Using function for closing the cart dialog which appears after adding TV into shopping cart
      cy.closeCartDialog()

      cy.addTVtoCart(1)

      cy.closeCartDialog()
    })   
})
       
