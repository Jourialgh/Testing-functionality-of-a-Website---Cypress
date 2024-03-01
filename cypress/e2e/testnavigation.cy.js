

describe('TC10 - Verify Homepage Accessibility and Key Elements', () => {
    it('Homepage is accessible with key elements present', () => {

         
    Cypress.on('uncaught:exception', (err, runnable) => {
    
        return false;
      });
  
      // Navigate to the Homepage
      cy.visit('https://www.uj.edu.sa/');
  
      // Verify Header Presence
      cy.get('#hedar_tow').should('be.visible'); 
  
      // Verify Footer Presence
      cy.get('#footer_kau').should('be.visible'); 
  
      // Verify Navigation Link Presence
      cy.get('.nav').should('be.visible'); 
    });
  });
  




