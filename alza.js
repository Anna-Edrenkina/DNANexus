// eshop.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

// const { get } = require("http")

describe('My First Test', () => {
    it('Visit Alza', () => {
      cy.visit('https://www.alza.cz')

      // cy.get('.js-cookies-info cookies-info cols-3')
      //   .get('.btnx cookies-info__button js-cookies-info-close')
      //   .click()

      // Accept cookies dialog
      cy.get('.js-cookies-info-close').click()

      //Select TV from main menu
      cy.get('.leftMenuItem').contains('TV, foto, audio-video').click()

      // odklikne souhlasim z podminkama v okne ktere vyjede
      // cy.get('[data-cy=rozumim]')
        // .click()
      // cy.getIframeBody().find('button').should('have.text', 'Rozumím').click()

      //  najde a vybere nahore televize, audio, video
      //cy.get('.main-menu-catalog-list > .main-menu-catalog-category:nth-child(1) > a > .link-name > strong').click() 

      // cy.get('.main-menu-catalog-list')
      //   .get('.main-menu-catalog-category:nth-child(1)')
      //   .click()

      //  vybere kategorie televize a klikne na to 
      //cy.get('.category-tree-box-list > .category-tree-box:nth-child(1) > a > .category-tree-wrap > img').click()

      // cy.get('.category-tree-box-list')
      //   .get('.category-tree-box:nth-child(1)')
      //   .click()

      //cy.get('.dropdown-menu').click()

      // cy.get('.category-actions')
      //   .get('.sort-panel-select').type('4')
      //   .click()
        
    
    })   
})
       
