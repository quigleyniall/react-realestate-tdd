describe('renders listings', () => {
  it('makes api call on mount', () => {
    cy.visit('http://localhost:3000/listings/buy/London');
    cy.wait(10000);
    cy.contains('London');
  })
})