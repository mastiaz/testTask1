class CartPage {
    itemNameInCart = '[data-test="inventory-item-name"]';
    cartQuantity = '[data-test="item-quantity"]';
    checkoutButton = '[data-test="checkout"]';
    
    getItemNameInCart(){
        return cy.get(this.itemNameInCart)
    }
    getCartQuantity(){
        return cy.get(this.cartQuantity)
    }
    getCheckoutButton(){
        return cy.get(this.checkoutButton)
    }
    }
    export const cartPage = new CartPage