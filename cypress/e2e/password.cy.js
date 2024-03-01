
describe('Password Masking During Login', () => {

    it('TC003 - Verify Password Masking During Login', () => {
    
       //access the login page URL
       cy.visit('https://sts.uj.edu.sa/adfs/ls/?SAMLRequest=fVHRboJAEPyVy77DcQhoLoKxNaYmNpKCfeiLucJRzsBh2cP084uoqSaNL5tcdnbmZmY6%2B6krcpQtqkaHwGwHiNRZkyv9FcI2XVoTmEVTFHXlHvi8M6V%2Bk9%2BdREP6Q438vAmhazVvBCrkWtQSucl4Mn9dc9d2%2BKFtTJM1FZA5omxNL%2FXcaOxq2SayPapMbt%2FWIZTGHJBTWtVod3tb5p2Ngope0zqp0GEkyYaKSgmkO%2BYFOwZk0X9GaWEGA1cONHcceYG0Qgpk2bSZHGyEUIgKJZDVIgThew7Lxl5RFqx0x3KkpKv23jifKCcoTiCMBaI6yr8zxE6uNBqhTQiu444sxizmpsznvsudwPYnwQeQ%2BGL%2BSelzqI%2BS%2BjyDkL%2BkaWzFmyQF8n4tpwfApQo%2BqLe3HTwmFtfgIfo35im95Y0uz%2FvGo18%3D&SigAlg=http%3A%2F%2Fwww.w3.org%2F2001%2F04%2Fxmldsig-more%23rsa-sha256&Signature=abd0o7Lo1fcBthgAMKkk3PmNyn7fwXlDT3cc2sr%2Bm1WWspQ8%2FC66mK5Qku4FMyhfWc3yKpbnrRdNyu4IM2w018Ondd7%2BeO6CUBKfOi7n%2Fr%2FcbgCPFRpkUEuRuX3CzLdCrlvb7Y4pa5bA72Vk7yiIN6Sn69U8BE9u%2BkAv7hA1vzHev0pNVDPT6PWhkRbi%2BR%2B3LJiuof6sF%2FxlOSOdBSY08xcS8ndjFkyNsSMIrunwLaGw1Q5kopLZiOc3%2BNexhNF%2FLa%2BV5Xva%2BknsDbtTjPC8GxswYsixkVwNUlepmoaK5JYbxshJDhnOAzfb93rCYWxXJrRD%2Fbcj7vvFYoPZ7jF6Jw%3D%3D');
     
       // Step 2: Enter valid student ID
    cy.get('[name="UserName"]').type('2116642');

    // Step 3: Enter valid password
    cy.get('[name="Password"]').type('Aa141539555');

    // Step 4: Verify password masking
    cy.get('[name="Password"]').should('have.attr', 'type', 'password');

    // Step 5: Click the 'Login' button
     cy.get('#submitButton').click();

  });
});
     
 