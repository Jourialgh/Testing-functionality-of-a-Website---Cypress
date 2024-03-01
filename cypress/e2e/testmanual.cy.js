
describe('Verify Users Manual cases', () => {

  it('TC004 - Verify that the users manual loads successfully when clicked', () => {
      //user is on the main Uj Website page
      cy.visit('https://www.uj.edu.sa/Pages-El-Services.aspx'); 

      //click on 'User's Manual'
      cy.get('a[href="https://we.uj.edu.sa/pages-Blackboard-Manuals.aspx"]').first().click();

      //validate the User's Manual loads correctly
      //checking if the URL is correct
      cy.url().should('eq', 'https://we.uj.edu.sa/pages-Blackboard-Manuals.aspx');

      //handle uncaught exceptions
      Cypress.on('uncaught:exception', (err, runnable) => {
          return false;
      });
  });

  it('TC005 - Verify that the users manual load Failure', () => {
      
      Cypress.on('uncaught:exception', (err, runnable) => {
          return false;
      });

      //user is on the UJ Website  page
      cy.visit('https://www.uj.edu.sa/Pages-El-Services.aspx'); 

      //click on 'User's Manual' 
      cy.get('a[href="https://we.uj.edu.sa/pages-Blackboard-Manuals.aspx"]').first().click();

      //assert against some visible text or specific element that signifies an error page
      cy.contains('There is an error in the Pahge').should('be.visible');
  });

});

  
 
  