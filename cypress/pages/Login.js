export class Login {

    navigate() {
        cy.visit('https://katanamrp.com/')
    }

    login(username, password) {
        cy.contains('Sign in').click()
        cy.get('input[placeholder="yours@example.com"]').type(username)
        cy.get('input[placeholder="your password"]').type(password)
        cy.get('.auth0-lock-submit').click()
    }



}