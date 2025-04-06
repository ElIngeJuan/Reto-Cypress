describe('GitHub Repository Star Test', () => {
    before(() => {
      cy.visit('https://github.com/login')
      cy.get('input[name="login"]').type('Usuario')
      cy.get('input[name="password"]').type('Contraseña')
      cy.get('input[name="commit"]').click()
    })
  
    it('Entra a perfil, entra a tus repositorios y da Star al primer repositorio', () => {
      cy.get('button[aria-label="Open user navigation menu"]').click()
      cy.contains('li.prc-ActionList-ActionListItem-uq6I7', 'Your repositories').click()
      cy.get('button[aria-label="Star this repository"]').first().click()

    })
  })
  