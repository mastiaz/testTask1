class MainPage {
productCard = '[data-test="inventory-item-description"]';
addToCartButton = '[id*="add-to-cart"]';
cartItems = '[data-test="shopping-cart-badge"]';
cartButton = '[data-test="shopping-cart-link"]';
itemNameInCart = '[data-test="inventory-item-name"]';
itemPrice = '[data-test="inventory-item-price"]';
menuButton = '#react-burger-menu-btn';
logoutButton = '[data-test="logout-sidebar-link"]';

getProductCard(){
    return cy.get(this.productCard)
}
getAddToCartButton(){
    return cy.get(this.addToCartButton)
}
getCartItems(){
    return cy.get(this.cartItems)
}
getCartButton(){
    return cy.get(this.cartButton)
}
getItemNameInCart(){
    return cy.get(this.itemNameInCart)
}
getItemPrice(){
    return cy.get(this.itemPrice)
}
getMenuButton(){
    return cy.get(this.menuButton)
}
getLogoutButton(){
    return cy.get(this.logoutButton)
}
}
export const mainPage = new MainPage