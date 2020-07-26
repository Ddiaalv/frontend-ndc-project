describe('Monster section', () => {
  const URL = 'http://localhost:3000/';

  it('Search monster by name and weakness', function () {
    cy.visit(URL);
    cy.get('[href="/craftsmanship"] > .PostItMenu').click();
    cy.url().should('include', '/craftsmanship');
    cy.wait(500);
  });
});
