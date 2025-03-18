describe('E2E Testing', () => {
  it('Check the Data table and filter', () => {
    cy.viewport(1600, 800)
    cy.visit('http://localhost:3000')
    cy.contains('2025 Distribution Planning')
    cy.contains('Completed Input')
    cy.get('.filter-icon').click()
    cy.contains('Annual')
    cy.get('table').find('tbody>tr')
      .first().click()
    cy.contains('Planned Tt Start')
  })
})
