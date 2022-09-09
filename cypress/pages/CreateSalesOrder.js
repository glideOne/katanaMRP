export class CreateSalesOrder {
    navigate() {
        cy.visit('https://factory.katanamrp.com/salesorder')
    }

    createCustomer(customerName) {
        cy.get('.MuiAutocomplete-root > .MuiFormControl-root')
            .type(customerName)
            .type('{enter}');
        return this;
    }

    searchCustomer(firstName, lastName) {
        cy.get('.MuiAutocomplete-root > .MuiFormControl-root')
            .type(firstName, {delay: 2000})
            .type('{downArrow}')
            .type('{enter}');
        return this;
    }

    validateAllChangesSaved() {
        cy.contains('All changes saved').should('be.visible');
        return this;
    }

}