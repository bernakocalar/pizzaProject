describe('Pizza Order Page', () => {

  beforeEach(() => {
    cy.visit("http://localhost:5179/orderPage"); // Eğer baseUrl yoksa buraya tam URL'yi koy!
  });

  it('should input a name correctly', () => {
    cy.get('textarea[name="name"]', { timeout: 5000 })
      .should('be.visible')
      .type('John Doe')
      .should('have.value', 'John Doe');
  });

  it('should allow multiple toppings to be selected', () => {
    cy.get('input[type="checkbox"][value="pepperoni"]').should('be.visible').check();
    cy.get('input[type="checkbox"][value="tavuk ızgara"]').check();
    cy.get('input[type="checkbox"][value="mısır"]').check();
    cy.get('input[type="checkbox"][value="sarımsak"]').check();
    cy.get('input[type="checkbox"][value="ananas"]').check();
    cy.get('input[type="checkbox"]:checked').should('have.length', 5);
  });

  it('should submit the order form', () => {
    cy.get('input[name="size"][value="orta"]').check();
    cy.get('select[name="dough"]').select('ince');
    cy.get('input[type="checkbox"][value="pepperoni"]').check();
    cy.get('textarea[name="name"]').type('John Doe');
    cy.get('textarea[name="note"]').type('No onions, please.');


});
});