
describe('Verify cases of Login for Student', () => {

    it('TC001 - Verify Successful Login for Student', () => {

      //access the login page URL
      cy.visit('https://sts.uj.edu.sa/adfs/ls/?SAMLRequest=fVHRboJAEPyVy77DcQhoLoKxNaYmNpKCfeiLucJRzsBh2cP084uoqSaNL5tcdnbmZmY6%2B6krcpQtqkaHwGwHiNRZkyv9FcI2XVoTmEVTFHXlHvi8M6V%2Bk9%2BdREP6Q438vAmhazVvBCrkWtQSucl4Mn9dc9d2%2BKFtTJM1FZA5omxNL%2FXcaOxq2SayPapMbt%2FWIZTGHJBTWtVod3tb5p2Ngope0zqp0GEkyYaKSgmkO%2BYFOwZk0X9GaWEGA1cONHcceYG0Qgpk2bSZHGyEUIgKJZDVIgThew7Lxl5RFqx0x3KkpKv23jifKCcoTiCMBaI6yr8zxE6uNBqhTQiu444sxizmpsznvsudwPYnwQeQ%2BGL%2BSelzqI%2BS%2BjyDkL%2BkaWzFmyQF8n4tpwfApQo%2BqLe3HTwmFtfgIfo35im95Y0uz%2FvGo18%3D&SigAlg=http%3A%2F%2Fwww.w3.org%2F2001%2F04%2Fxmldsig-more%23rsa-sha256&Signature=abd0o7Lo1fcBthgAMKkk3PmNyn7fwXlDT3cc2sr%2Bm1WWspQ8%2FC66mK5Qku4FMyhfWc3yKpbnrRdNyu4IM2w018Ondd7%2BeO6CUBKfOi7n%2Fr%2FcbgCPFRpkUEuRuX3CzLdCrlvb7Y4pa5bA72Vk7yiIN6Sn69U8BE9u%2BkAv7hA1vzHev0pNVDPT6PWhkRbi%2BR%2B3LJiuof6sF%2FxlOSOdBSY08xcS8ndjFkyNsSMIrunwLaGw1Q5kopLZiOc3%2BNexhNF%2FLa%2BV5Xva%2BknsDbtTjPC8GxswYsixkVwNUlepmoaK5JYbxshJDhnOAzfb93rCYWxXJrRD%2Fbcj7vvFYoPZ7jF6Jw%3D%3D')
        .then(() => {
          cy.url().should('include', '/adfs/ls/'); //check the URL to ensure the login page is loaded
        });
  
      //enter student ID
      cy.get('#userNameArea').type('2116156');
  
      //enter password
      cy.get('#passwordInput').type('Aa119001269', { force: true });

      //click the Login button
      cy.get('#submitButton').click();

      cy.url().then(url => {
        console.log('The current URL is:','https://lms.uj.edu.sa/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_1_1');

 
    });
 });

    it('TC002 - Verify Unsuccessful Login for Student', () => {

      //access the login page URL
      cy.visit('https://sts.uj.edu.sa/adfs/ls/?SAMLRequest=fVHRboJAEPyVy77DcQhoLoKxNaYmNpKCfeiLucJRzsBh2cP084uoqSaNL5tcdnbmZmY6%2B6krcpQtqkaHwGwHiNRZkyv9FcI2XVoTmEVTFHXlHvi8M6V%2Bk9%2BdREP6Q438vAmhazVvBCrkWtQSucl4Mn9dc9d2%2BKFtTJM1FZA5omxNL%2FXcaOxq2SayPapMbt%2FWIZTGHJBTWtVod3tb5p2Ngope0zqp0GEkyYaKSgmkO%2BYFOwZk0X9GaWEGA1cONHcceYG0Qgpk2bSZHGyEUIgKJZDVIgThew7Lxl5RFqx0x3KkpKv23jifKCcoTiCMBaI6yr8zxE6uNBqhTQiu444sxizmpsznvsudwPYnwQeQ%2BGL%2BSelzqI%2BS%2BjyDkL%2BkaWzFmyQF8n4tpwfApQo%2BqLe3HTwmFtfgIfo35im95Y0uz%2FvGo18%3D&SigAlg=http%3A%2F%2Fwww.w3.org%2F2001%2F04%2Fxmldsig-more%23rsa-sha256&Signature=abd0o7Lo1fcBthgAMKkk3PmNyn7fwXlDT3cc2sr%2Bm1WWspQ8%2FC66mK5Qku4FMyhfWc3yKpbnrRdNyu4IM2w018Ondd7%2BeO6CUBKfOi7n%2Fr%2FcbgCPFRpkUEuRuX3CzLdCrlvb7Y4pa5bA72Vk7yiIN6Sn69U8BE9u%2BkAv7hA1vzHev0pNVDPT6PWhkRbi%2BR%2B3LJiuof6sF%2FxlOSOdBSY08xcS8ndjFkyNsSMIrunwLaGw1Q5kopLZiOc3%2BNexhNF%2FLa%2BV5Xva%2BknsDbtTjPC8GxswYsixkVwNUlepmoaK5JYbxshJDhnOAzfb93rCYWxXJrRD%2Fbcj7vvFYoPZ7jF6Jw%3D%3D');
  
      //validate that the login page loads correctly
      cy.url().should('include', '/adfs/ls/');
  
       //enter student ID
          cy.get('#userNameInput') 
         .should('be.visible') //wait for the element to be visible
         .type('student0');
  
      //enter password
         cy.get('#passwordInput') 
         .should('be.visible') // Wait for the element to be visible
         .type('2aa2726');
  
      //click the Login button
         cy.get('#submitButton').click();
  
      //validate the error message for incorrect credentials
         cy.get('#errorText').should('contain.text', 'Incorrect user ID or password. Type the correct user ID and password, and try again.');

    });
 
   });
