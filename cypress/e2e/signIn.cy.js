/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {

  });

  it('should open login page', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');

    cy.get('button[type="submit"]').click();

    cy.contains('You logged into a secure area!').should('be.visible');
  });

  it('should show error for invalid credentials', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('#username').type('wrongUser');
    cy.get('#password').type('wrongPassword');

    cy.get('button[type="submit"]').click();

    cy.contains('Your username is invalid!').should('be.visible');
  });

  it('should logout successfully', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');

    cy.get('button[type="submit"]').click();

    cy.contains('a', 'Logout').click();

    cy.contains('You logged out of the secure area!').should('be.visible');
  });
});
