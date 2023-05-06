describe('Cypress first test', () => {
    it('first test', () => {
        cy.visit('https://automationexercise.com/')
        cy.title().should('eq',"Automation Exercise")
        cy.url().should('eq','https://automationexercise.com/')
    });
    it('second test', () => {
        cy.visit('https://automationexercise.com/')
        cy.title().should('include',"Automation ")
        cy.url().should('include','automationexercise')
    });
    
});