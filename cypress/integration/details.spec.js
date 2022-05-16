describe('ingredient details open', function() {
    before(function() {
      cy.visit('http://localhost:3000');
    });    

    it('open and close bun details', function() {    
      cy.get('[data-cy="ingredient"]').eq(0).click();
      cy.contains('описание');

      cy.get('[class^=modal_close-icon__]').first().click();
      cy.contains('описание').should('not.exist');
    });
}); 