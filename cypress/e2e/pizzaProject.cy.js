describe('Pizza Order Page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5178/orderPage'); // Eğer baseUrl yoksa buraya tam URL'yi koy!
  });

  it('should input a name correctly', () => {
    cy.get('textarea[name="name"]', { timeout: 5000 })
      .should('be.visible')
      .type('John Doe')
      .should('have.value', 'John Doe');
  });

  it('should allow multiple toppings to be selected', () => {
    cy.get('input[type="checkbox"][value="pepperoni"]').should('be.visible').check();
    cy.get('input[type="checkbox"][value="chicken"]').check();
    cy.get('input[type="checkbox"][value="corn"]').check();
    cy.get('input[type="checkbox"][value="garlic"]').check();
    cy.get('input[type="checkbox"][value="pineapple"]').check();
    cy.get('input[type="checkbox"]:checked').should('have.length', 5);
  });

  it('should submit the order form', () => {
    cy.get('input[name="size"][value="medium"]').check();
    cy.get('select[name="dough"]').select('thin');
    cy.get('input[type="checkbox"][value="pepperoni"]').check();
    cy.get('textarea[name="name"]').type('John Doe');
    cy.get('textarea[name="note"]').type('No onions, please.');


});
});