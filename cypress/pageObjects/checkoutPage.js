class CheckoutPage {
    firstNameField = '[data-test="firstName"]';
    lastNameField = '[data-test="lastName"]';
    postalCodeField = '[data-test="postalCode"]';
    continueButton = '[data-test="continue"]';
    totalPrice = '[data-test="total-label"]';
    itemTotalPrice = '[data-test="subtotal-label"]';
    taxPrice = '[data-test="tax-label"]';
    finishButton = '[data-test="finish"]';
    checkoutContainer = '[data-test="checkout-complete-container"]';
    backHomeButton = '[data-test="back-to-products"]';

    getFirstNameField(){
        return cy.get(this.firstNameField)
    }
    getLastNameField(){
        return cy.get(this.lastNameField)
    }
    getPostalCodeField(){
        return cy.get(this.postalCodeField)
    }
    getContinueButton(){
        return cy.get(this.continueButton)
    }
    getTotalPrice(){
        return cy.get(this.totalPrice)
    }
    getItemTotalPrice(){
        return cy.get(this.itemTotalPrice)
    }
    getTaxPrice(){
        return cy.get(this.taxPrice)
    }
    getFinishButton(){
        return cy.get(this.finishButton)
    }
    getCheckoutContainer(){
        return cy.get(this.checkoutContainer)
    }
    getBackHomeButton(){
        return cy.get(this.backHomeButton)
    }
}

export const checkoutPage = new CheckoutPage