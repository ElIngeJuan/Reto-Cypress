describe('GitHub Repository Star Test', () => {
    before(() => {
      cy.visit('https://github.com/login')
      cy.get('input[name="login"]').type('Usuario')
      cy.get('input[name="password"]').type('Contraseña')
      cy.get('input[name="commit"]').click()
    })
  
    it('Debe dar al filter y quitar la opcion de repositories', () => {

    cy.get('details#feed-filter-menu').should('exist').and('be.visible')
    cy.get('details#feed-filter-menu summary').click()
    cy.get('label[data-name="Repositories"] input[type="checkbox"]')
      .should('be.checked')
      .uncheck({ force: true })
    cy.contains('button', 'Save').click()
    cy.get('details#feed-filter-menu').should('not.have.attr', 'open')
    })
  })
  