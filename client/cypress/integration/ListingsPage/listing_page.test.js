describe('renders listings', () => {
  test('makes api call on mount', () => {
    cy.visit('http://localhost:3000/listing/buy/london');
    cy.wait(10000);
    cy.contains('london');
  })
})