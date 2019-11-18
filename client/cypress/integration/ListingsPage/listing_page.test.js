describe('renders listings', () => {
  it.skip('makes api call on mount', () => {
    cy.visit('http://localhost:3000/listings/buy/London');
    cy.wait(10000);
    cy.contains('London');
  })

  it('displays dropdowns', () => {
    const location = 'Manchester';
    const priceMin = 500;
    const priceMax = 2000000;
    
    cy.visit('http://localhost:3000/listings/buy/London');
    cy.get("[data-test='listing-search-input']").clear()
    cy.get("[data-test='listing-search-input']").type(location)
    cy.get("[data-test='dropdown-wrapper']").eq(0).trigger('mouseover');
    cy.get("[data-test='rent-li']").trigger('click');
    
    cy.get("[data-test='dropdown-wrapper']").eq(1).trigger('mouseover');
    cy.get("[data-test='price-min']").type(priceMin)
    cy.get("[data-test='price-max']").type(priceMax)

    cy.get("[data-test='dropdown-wrapper']").eq(2).trigger('mouseover') 
    cy.get("[data-test='one-bed-button']").click({ force: true });

    cy.get("[data-test='dropdown-wrapper']").eq(3).trigger('mouseover');
    cy.get("[data-test='exact-bath-button']").click();
    cy.get("[data-test='three-bath-button']").click();

    cy.get("[data-test='listing-search-button']").click();
    cy.url().should('include', '/listings/rent/Manchester');
    cy.url().should('include', `priceMin=${priceMin}&priceMax=${priceMax}&bedMin=1&bedMax=20&bathMin=3&bathMax=3`);
  })
})