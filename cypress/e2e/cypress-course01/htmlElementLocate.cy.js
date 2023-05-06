describe('Cypress Locator', () => {
    it('Html element locating', () => {
        cy.get('#user-name') //id locate usage
        cy.get('.login-box') //class locate usage
        cy.get('input') //tag locate usage
        cy.get('input[name="user-name"]') //attribute locate usage
        cy.get('input[placeholder]:contains("Username")') //Include text locate usage 
        cy.get('input[placeholder]:contains("Login")') //Include text element locate usage
        cy.get('a').contains("Login")
        cy.contains('Login')


    });
});