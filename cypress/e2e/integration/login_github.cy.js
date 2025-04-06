describe('GitHub Login Test', () => {
    beforeEach(() => {
        cy.visit('https://github.com/login')
    })

    it('Logs into GitHub', () => {
        cy.get('input[name="login"]').type('lgin')
        cy.get('input[name="password"]').type('contraseña')
        cy.get('input[name="commit"]').click()
    })
})
