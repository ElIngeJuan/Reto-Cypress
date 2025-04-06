describe('GitHub Repository Star Test', () => {
    before(() => {
      cy.visit('https://github.com/login')
      cy.get('input[name="login"]').type('lgin')
      cy.get('input[name="password"]').type('contraseña')
      cy.get('input[name="commit"]').click()
    })
  
    it('Debe dar al filter y quitar la opcion de repositories', () => {
        cy.visit('https://github.com/ElIngeJuan/ISIS3710-Parcial1');
        cy.get('[data-aria-prefix="Star this repository"]').click()
    })
  })
  