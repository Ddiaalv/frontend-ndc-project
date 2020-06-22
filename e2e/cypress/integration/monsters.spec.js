describe('Monster section', () => {
  const URL = 'http://localhost:3000/';
  it('Search one monster in lowercase', function() {
    const MONSTERNAME = 'Rathalos Celeste';
    cy.visit(URL);
    cy.get('[href="/monstruos"] > .PostItMenu').click();
    cy.url().should('include', '/monstruos');
    cy.wait(500);
    cy.get('.Input')
      .type(MONSTERNAME)
      .should('have.value', MONSTERNAME);
    cy.get('.MonsterList > :nth-child(1)');
  });

  it('Search monster in uppercase with three responses', function() {
    const MONSTERNAME = 'Rathalos'.toUpperCase();
    cy.visit(URL);
    cy.get('[href="/monstruos"] > .PostItMenu').click();
    cy.url().should('include', '/monstruos');
    cy.wait(500);
    cy.get('.Input')
      .type(MONSTERNAME)
      .should('have.value', MONSTERNAME);
    cy.get('.MonsterList > :nth-child(3)');
  });
});
