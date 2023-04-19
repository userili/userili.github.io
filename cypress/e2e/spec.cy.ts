describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:9000/vertiport-management/new-vertiport/overview')
    cy.wait(5000)
  })
})