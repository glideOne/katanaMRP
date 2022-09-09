export class Sell {
    navigate() {
        cy.visit('https://factory.katanamrp.com/sales')
    }

    searchForCustomer(customer) {
        cy.get('[data-testid="customerNameFilterInput"]').clear().type(customer);
    }

    validateSearchResult(customer) {
       cy.contains(customer).should('be.visible');
    }

}