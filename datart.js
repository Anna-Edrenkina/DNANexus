/// <reference types="cypress" />

// I hade an error "ufo is not founded" when i tried to get to the TV category, but probably it was not related with the bug in cypress test, but with the bug in HTML code on datart website"
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('Datart test', () => {
    it('Visit Datart', () => {
      // Visit the datart web site main screen
      cy.visit('https://www.datart.cz')

      // Click "Souhlasim" in cookie settings window
      cy.contains('Souhlasím').click()

      // Choose the first category "Televize, audio a video" in main cataloge.
      cy.get('.link-name').contains('Televize').click()

      // Choose "Televize" category and click on it  
      cy.get('.category-tree-title').contains('Televize').click()

      // Filter the TV list by price, where the most expensive are at the top
      cy.get('.sort-panel-select').select(3).should('have.value', '4')

      // Wait until TV list is visible
      cy.url().should('contain', '/filter')

      // Choose the first TV in the list, click on button "Vlozit do kosiku".
      cy.get('.item-cart').eq(0).click()

      // Wait until close button is visible and click on it.
      cy.get('.close').should('be.visible').click()

      // Choose the second TV in the list, click on button "Vlozit do kosiku"
      cy.get('.item-cart').eq(1).click()

      // Wait until close button is visible and click on it.
      cy.get('.close').should('be.visible').click()
              
    
    })   
})
       
