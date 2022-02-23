

/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('Datart test', () => {
    it('Visit Datart', () => {
      // Visit the datart web site main screen
      cy.visit('https://www.datart.cz')

      // Click "Souhlasim" in cookie settings window
      cy.contains('Souhlasím').click()

      // Choose the first category "Televize, audio a video" in main cataloge.
      // cy.get('.main-menu-catalog-list')
      //   .get('.main-menu-catalog-category:nth-child(1)')
      //   .click()

      // 
      cy.get('.link-name').contains('Televize').click()

      cy.get('.category-tree-title').contains('Televize').click()

      cy.get('.sort-panel-select').select(3).should('have.value', '4')

      cy.url().should('contain', '/filter')
      
      cy.get('.item-cart').eq(0).click()
      
      cy.get('.close').should('be.visible').click()
      
      cy.get('.item-cart').eq(1).click()
      
      cy.get('.close').should('be.visible').click()
              
    
    })   
})
       
