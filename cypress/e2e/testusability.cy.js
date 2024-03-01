describe('TC009 - Verify Website Usability on Mobile Devices', () => {


    const viewports = [
      { label: 'iPhone X', width: 375, height: 812 },
      { label: 'Samsung Galaxy S10', width: 360, height: 760 },
    ];
  
    viewports.forEach(viewport => {
      context(`Testing on ${viewport.label}`, () => {
        beforeEach(() => {
          cy.on('uncaught:exception', (err, runnable) => {
            return false;
          });
          cy.viewport(viewport.width, viewport.height);
          cy.visit('https://www.uj.edu.sa/Pages-El-Services.aspx');
        });
  
        it('Page loads correctly and is readable', () => {
          cy.get('.col-md-12').should('be.visible');
          cy.get('#footer_kau').should('be.visible');
        });
  
        it('Interacts with page elements correctly', () => {
          cy.get('a[href="https://lms.uj.edu.sa/"]').first().click({ force: true });
        });
  
        it('Adjusts to orientation changes correctly', () => {
          cy.viewport(viewport.height, viewport.width); 
          cy.get('.col-md-12').should('be.visible');
          cy.get('#footer_kau').should('be.visible');
        });
      });
    });
  });
  