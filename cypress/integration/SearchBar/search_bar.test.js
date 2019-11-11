describe('test search bar', () => {
  const location = 'London'
  it('types in the input box', () => {
    cy.visit('http://localhost:3000');
    cy.get("[data-test='search-bar']").type(location);
    cy.get("[data-test='search-button']").click();
  })
})