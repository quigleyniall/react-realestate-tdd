import { sampleResponse } from '../../../src/test/sampleResponse';

describe('test search bar', () => {
  it('searches nestoria api and shows result on page', () => {
    const location = 'London';
    cy.visit('http://localhost:3000');
    cy.get("[data-test='search-bar']").type(location);
    cy.get("[data-test='search-button']").click();
    cy.wait(10000);
    cy.contains(location)
  });
})