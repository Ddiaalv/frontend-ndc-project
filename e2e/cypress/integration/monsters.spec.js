describe('Monster section', () => {
  const URL = 'http://localhost:3000/';
  const MONSTERNAME = 'Rathalos'.toUpperCase();

  it('Search monster by name', function() {
    cy.visit(URL);
    cy.get('[href="/monstruos"] > .PostItMenu').click();
    cy.url().should('include', '/monstruos');
    cy.wait(500);
    cy.get('.FieldForm > .Input')
      .type(MONSTERNAME)
      .should('have.value', MONSTERNAME);
    cy.get('.MonsterList > :nth-child(3)');
  });

  it('Search monster by weakness element', function() {
    cy.visit(URL);
    cy.get('[href="/monstruos"] > .PostItMenu').click();
    cy.url().should('include', '/monstruos');
    cy.wait(500);
    cy.get(':nth-child(2) > .Input').check();
  });

  it('Search monster by name', function() {
    cy.visit(URL);
    cy.get('[href="/monstruos"] > .PostItMenu').click();
    cy.url().should('include', '/monstruos');
    cy.wait(500);
    cy.get('.FieldForm > .Input')
      .type(MONSTERNAME)
      .should('have.value', MONSTERNAME);
    cy.get(':nth-child(2) > .Input').check();
  });
});
