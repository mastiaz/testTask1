import { helper } from "../../models/basemodels"
import { cartPage } from "../../pageObjects/cartPage"
import { checkoutPage } from "../../pageObjects/checkoutPage"
import { loginPage } from "../../pageObjects/loginPage"
import { alertsPage, mainPage } from "../../pageObjects/mainPage"


describe('vefiry login page', () => {
  beforeEach(() => {
    
    cy.visit('https://www.saucedemo.com/')
  })
  it('verify page loading correctly', () => {
    loginPage.getLoginLogo().should("have.text", "Swag Labs");
    loginPage.getUserNameField().should("be.visible");
    loginPage.getPasswordField().should("be.visible");
    loginPage.getLoginButton().should("be.visible");
   })

  it('verify login with valid credentials', () => {
   loginPage.getUserNameField().type("standard_user");
   loginPage.getPasswordField().type("secret_sauce");
   loginPage.getLoginButton().click();
  })
  it('verify login with invalid credentials', () => {
    loginPage.getUserNameField().type("standard_user");
    loginPage.getPasswordField().type("secret_sauce123");
    loginPage.getLoginButton().click();
    loginPage.getLoginError().should("be.visible").should("have.text", "Epic sadface: Username and password do not match any user in this service");
  })

})

describe('verify adding items to cart', () => {
  beforeEach(() => {
    
    cy.visit('https://www.saucedemo.com/')
  })
  function roundToTwoDigits(number){
    return number.toFixed(2)
  }

  it('verify adding product to cart', () => {
    // This massive can take any amount of product you want to buy
   const items =  ["Sauce Labs Backpack", "Test.allTheThings() T-Shirt (Red)"]
   let itemNames = [];
   let itemPrice = 0;
   let totalPrice = 0;
   let tax = 0;

   // Log in to the website using valid login credentials.
   loginPage.getUserNameField().type("standard_user");
   loginPage.getPasswordField().type("secret_sauce");
   loginPage.getLoginButton().click();

   // Add at least two different items to the cart using the custom command.
   cy.addItemsToCart(items);
   mainPage.getCartItems().should("have.text", items.length);
   mainPage.getCartButton().click();
   cartPage.getItemNameInCart().should("have.length", items.length);
   
   // Verify that the cart page displays the correct items added.
   cartPage.getItemNameInCart().each(($el)=> {
    itemNames.push($el.text())
   }).then(()=> {
    expect(itemNames).to.deep.equal(items);
    itemNames = [];
   })
   cartPage.getCartQuantity().should("have.length", items.length).each(($el) => {
    cy.wrap($el).should("have.text", "1")
   })
   cartPage.getCheckoutButton().click();

   // Fill in the required information on the Checkout: Your Information page.
   checkoutPage.getFirstNameField().type("test_checkout_firstName").should("have.value", "test_checkout_firstName");
   checkoutPage.getLastNameField().type("test_checkout_lastName").should("have.value", "test_checkout_lastName");
   checkoutPage.getPostalCodeField().type("test_postal_code").should("have.value", "test_postal_code");
   checkoutPage.getContinueButton().click();

   // Proceed to the Checkout: Overview page and verify that the correct items and total price (with tax) are displayed.
   cartPage.getItemNameInCart().should("have.length", items.length);
   cartPage.getItemNameInCart().each(($el)=> {
    itemNames.push($el.text())
   }).then(()=> {
    expect(itemNames).to.deep.equal(items);
    itemNames = [];
   })
   cartPage.getCartQuantity().should("have.length", items.length).each(($el) => {
    cy.wrap($el).should("have.text", "1")
   })

   // Ensure that the total price (with tax) displayed on the Checkout: Overview page is accurate based on the items added to the cart.
   mainPage.getItemPrice().each(($price)=> {
    const number = $price.text().replace(/[^0-9.]/g, '');
      const value = parseFloat(number);
      itemPrice += value;
      tax += value * 0.08
      totalPrice = itemPrice + tax
   }).then(()=>{
    checkoutPage.getTotalPrice().contains("$"+ roundToTwoDigits(totalPrice).toString())
    checkoutPage.getItemTotalPrice().contains("$"+ roundToTwoDigits(itemPrice).toString())
    checkoutPage.getTaxPrice().contains("$" + roundToTwoDigits(tax).toString())

    // Submit the checkout on the Checkout: Overview page.

    checkoutPage.getFinishButton().click();
    // Verify that the Checkout: Complete! page is displayed with a confirmation message.

    checkoutPage.getCheckoutContainer().should("contain.text", "Thank you for your order!")
    checkoutPage.getBackHomeButton().should("be.visible");

    // After completing the checkout, navigate back to the main page.
    checkoutPage.getBackHomeButton().click();
    mainPage.getMenuButton().click();
    mainPage.getLogoutButton().click();
    loginPage.getUserNameField().should("be.visible");
    loginPage.getPasswordField().should("be.visible");
    loginPage.getLoginButton().should("be.visible");
   })
   } );
  })
