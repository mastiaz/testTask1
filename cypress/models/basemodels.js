export default class Helper {
    getSpecificElement(locator, identifier) {
      if (typeof identifier === "string") return cy.contains(locator, identifier);
      if (typeof identifier === "number") return cy.get(locator).eq(identifier);
      else return cy.get(locator);
    }
  
    seconds (seconds) {
      return seconds * 1000;
    }
  
    minutes (minutes) {
      return minutes * 1000 * 60;
    }
    zalypa(){
        cy.get(alertsPage.alertButton).click();
    cy.get('.todo-list li').should('have.length', 2)
    }
  }
  export const helper = new Helper();