
describe('Automation Exercise', () => {
   it('Processo de compra da loja virtual', () => {
    cy.visit('https://www.automationexercise.com')


/* BLOCO COMENTADO - Criação do Usuario


//Criação do login na plataforma

    cy.get(`a[href$=login]`).click()
    cy.get('[data-qa="signup-name"]').type('Teste 10') //Alterar para que possa ser cadastrado com sucesso
    cy.get('[data-qa="signup-email"]').type('teste-qa-numero10@mail.com') //Alterar para que possa ser cadastrado com sucesso
    cy.contains('button','Signup').click()
    cy.get('input[type=radio]').check('Mrs')

    cy.get('[data-qa="password"]').type('123Teste')
    cy.get('[data-qa="days"]').select('14')
    cy.get('[data-qa="months"]').select('9')
    cy.get('[data-qa="years"]').select('1995')
    cy.get('[data-qa="company"]').type('BNEX')
    cy.get('[data-qa="first_name"]').type('Teste')
    cy.get('[data-qa="last_name"]').type('QA')
    cy.get('[data-qa="address"]').type('R: Amauri,227')
    cy.get('[data-qa="country"]').select('New Zealand')
    cy.get('[data-qa="state"]').type('São Paulo')
    cy.get('[data-qa="city"]').type('São Paulo')
    cy.get('[data-qa="zipcode"]').type('00000-000')
    cy.get('[data-qa="mobile_number"]').type('+55110001234')
    cy.get('[data-qa="create-account"]').click()

//Verificação da Conta
    cy.contains('Account Created!').should('be.visible')
    cy.get('a[data-qa="continue-button"]').click()

// Login na plataforma
    cy.contains('Logged in as').should('be.visible') 

    */

// Acesso do usuário
    cy.get(`a[href$=login]`).click()
    cy.contains('button','Signup').click()
    cy.get('[data-qa="login-email"]').type('teste-qa-numero9@mail.com');
    cy.get('[data-qa="login-password"]').type('123Teste');
    cy.get('[data-qa="login-button"]').click();

// Navegação pelo menu
        cy.get('a[href="/products"]').click()
        cy.contains('Women').click()
        cy.contains('Blue Top').first().click()
        cy.get('a[href="/category_products/1"]').click()
        cy.get('a[href="/product_details/3"]').click()
        cy.get('[class="btn btn-default cart"]').click()
        cy.contains('View Cart').click()
        cy.contains('Proceed To Checkout').click()
        cy.get('[class="btn btn-default check_out"]').click()
  
// Pagamento
        cy.get('[data-qa="name-on-card"]').type('Teste Milena')
        cy.get('[data-qa="card-number"]').type('1415161718192021')
        cy.get('[data-qa="cvc"]').type('789')
        cy.get('[data-qa="expiry-month"]').type('12')
        cy.get('[data-qa="expiry-year"]').type('2030')
        cy.get('[data-qa="pay-button"]').click()
             
       
}); 
});