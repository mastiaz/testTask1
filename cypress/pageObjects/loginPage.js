class LoginPage {
    usernameField = '[type="text"]';
    passwordField = '[type="password"]';
    loginButton = '#login-button';
    loginLogo = ".login_logo";
    loginError = '[data-test="error"]';



    
getUserNameField(){
    return cy.get(this.usernameField)
}
getPasswordField(){
    return cy.get(this.passwordField)
}
getLoginButton(){
    return cy.get(this.loginButton)
}
getLoginLogo(){
    return cy.get(this.loginLogo)
}
getLoginError(){
    return cy.get(this.loginError)
}
}

export const loginPage = new LoginPage