

describe('Submit Service Evaluation Form', () => {

  
  it('TC007 - User submits service evaluation form and receives confirmation', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false; // Prevents Cypress from failing the test on exceptions
    });

    
    // Pre-Condition: User is on the page with the service evaluation form
    cy.visit('https://www.uj.edu.sa/Pages-El-Services.aspx'); 
    // Click the 'Service Evaluation' link/button
    cy.get('span.glyphicon.glyphicon-thumbs-up[title="تقييم الخدمة "]').first().click();
    // Ensure the form is visible
    cy.get('#form-main-content1').should('be.visible');
    // Fill in the evaluation form
    cy.get('span.-oV-81[aria-label="4 Star"]', { includeShadowDom: true }).click();
    cy.get('textarea[aria-label="Multi Line Text"]').type('This is feedback text');
    // Click the 'Submit' button
    cy.get('button[data-automation-id="submitButton"]').click();
    // Validate that the confirmation message appears
    cy.contains('div[data-automation-id="thankYouMessage"]', 'Your response was submitted.', { timeout: 10000 }).should('be.visible');
  });


    it('TC008 - Service Evaluation Form Submission Failure', () => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
  
      cy.visit('https://forms.office.com/Pages/ResponsePage.aspx?id=G9lTtMFqYUu4uF5l5CIjP5vZcKRIVmdImG10vuLdJrJUNExENUdYNEs4Qk9FMEpKU1ZTRERNUU5GTS4u');
      cy.get('#form-main-content1', { timeout: 70000 }).should('be.visible');
  
      cy.get('button[data-automation-id="submitButton"]').click();
  
      cy.get('body').then(($body) => {
        if ($body.find('span.-_--206').length) {
          cy.contains('span.-_--206', '1 question(s) need to be completed before submitting: Question 1.', { timeout: 15000 }).should('exist');
        } else {
          cy.log('Error message not found, checking for form presence.');
          cy.get('#form-main-content1', { includeShadowDom: true }).should('be.visible');
        }
      });
    });
  });
  
  
  


