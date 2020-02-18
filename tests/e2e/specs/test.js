// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/trees')
    cy.contains('h1', 'The Tree Data')
  })
})
