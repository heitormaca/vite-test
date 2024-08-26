describe('Home Page', () => {
  it('should display the correct title', () => {
    cy.visit('http://localhost:5173/')
    cy.contains('Vite + React').should('be.visible')
  })
})
