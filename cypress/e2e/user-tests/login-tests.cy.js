/// <reference types="cypress" />

describe('Login Test', () => {

    it.only('Login Succsessful', () => {
        cy.visit("https://www.netflix.com/login");
        cy.get("[name='userLoginId']").type("omerfaruk.isiq@gmail.com");
        cy.get("[data-uia='password-field']").type("KadıköyIstanbul");
        cy.get("[data-uia='login-submit-button']").click();
        cy.wait(3000);
        cy.get("[id='signOut']").should('have.text', "Oturumu Kapat");
    })

    it('Login Unsuccsessful', () => {
        cy.visit("https://www.netflix.com/login");
        cy.get("[name='userLoginId']").type("omerfaruk@gmail.com");
        cy.get("[data-uia='password-field']").type("KadıköyIstanbul");
        cy.get("[data-uia='login-submit-button']").click();
        cy.get("[data-uia='error-message-container+header']").should('have.text', "Incorrect password for omerfaruk@gmail.com");
    })

})