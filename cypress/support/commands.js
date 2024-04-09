import { mainPage } from "../pageObjects/mainPage";
import { cartPage } from "../pageObjects/cartPage";

Cypress.Commands.add('addItemsToCart', (items) => {
    cy.wrap(items).each((item) => {
        cy.log(item)
        cy.contains(mainPage.productCard, item).find(mainPage.addToCartButton).click()
        })
  });

  