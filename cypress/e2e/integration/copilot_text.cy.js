describe('Copilot Ask Test', () => {
    before(() => {
        cy.visit('https://github.com/login')
        cy.get('input[name="login"]').type('lgin')
        cy.get('input[name="password"]').type('contraseña')
        cy.get('input[name="commit"]').click()
      })
    it('Pregunta algo a Copilot', () => {
      cy.get('#copilot-dashboard-entrypoint-textarea')
        .should('be.visible')
        .type('¿Cuál es la capital de Francia?')
      cy.get('svg.octicon-paper-airplane') 
        .closest('button') 
        .click()
    })
  })
  