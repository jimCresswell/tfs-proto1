// https://docs.cypress.io/api/introduction/api.html

describe('Smoke test', () => {
  it('The app starts and renders', () => {
    cy.visit('/')
    cy.contains('h1', 'The Tree Data')
  })
})
