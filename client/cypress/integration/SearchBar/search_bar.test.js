describe('navigation', () => {
  it('navigate to home page', () => {
    cy.visit('http://localhost:3000');
    cy.get("[data-test='nav-home-button']").click();
    cy.url().should('not', 'include', '/listings')
  });

  it('navigate to buy listings page', () => {
    cy.visit('http://localhost:3000');
    cy.get("[data-test='nav-buy-button']").click();
    cy.url().should('include', '/listings/buy')
  });

  it('navigates to rent listings page', () => {
    cy.visit('http://localhost:3000');
    cy.get("[data-test='nav-rent-button']").click();
    cy.url().should('include', '/listings/rent')
  })
})

describe('test search bar', () => {
  const location = 'Manchester';
  
  it('navigates to rent listings page when search button is clicked', () => {
    cy.visit('http://localhost:3000');
    cy.get("[data-test='rent-button']").click();
    cy.get("[data-test='search-bar']").type(location);
    cy.get("[data-test='search-button']").click();
    cy.url().should('include', `/listings/rent/${location}`)
  });
  it('navigate to buy listins page when search button is clicked', () => {
    cy.visit('http://localhost:3000');
    cy.get("[data-test='buy-button']").click();
    cy.get("[data-test='search-bar']").type(location);
    cy.get("[data-test='search-button']").click();
    cy.url().should('include', `/listings/buy/${location}`)
  });  
})

describe('card navigation', () => {
  it('navigates to buy listings page when first card is clicked', () => {
    cy.visit('http://localhost:3000');
    cy.get("[data-test='card-button']").first().click();
    cy.url().should('include', '/listings/buy/london')
  });
  it('navigates to rent listings page when last card is clicked', () => {
    cy.visit('http://localhost:3000');
    cy.get("[data-test='card-button']").last().click();
    cy.url().should('include', '/listings/rent/london')
  });
  it('navigates to buy listings page when second card is clicked', () => {
    cy.visit('http://localhost:3000');
    cy.get("[data-test='card-button']").eq(1).click();
    cy.url().should('include', '/listings/buy/london')
  });
})

