describe('GitHub Login Test', () => {
    beforeEach(() => {
        cy.visit('https://github.com/login')
    })

    it('Iniciar sesión en github', () => {
        cy.get('input[name="login"]').type('Usuario')
        cy.get('input[name="password"]').type('Contraseña')
        cy.get('input[name="commit"]').click()
    })
})
