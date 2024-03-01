
describe('Verify Support Email Directs Correctly', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });


    it('TC006 - Support email button opens mail client with correct receiver address', () => {

      //user is on the main E-Learning Management System page
      cy.visit('https://www.uj.edu.sa/Pages-El-Services.aspx'); 
  
      //get the href attribute of the 'Support Email' button
      cy.get('a[href="mailto:wehelp@uj.edu.sa"]') // Select the link with the specific mailto href
      .should('have.attr', 'href', 'mailto:wehelp@uj.edu.sa'); // Check the href attribute is correctly formatted
  });
    
});



