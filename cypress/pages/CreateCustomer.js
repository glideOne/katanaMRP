export class CreateCustomer {
    navigate() {
        cy.visit('https://factory.katanamrp.com/customer');
    }

    fillInCustomerFields(firstname, lastname, email) {
        cy.get('[data-testid="inputCustomerFirstName"] > .MuiInputBase-root > .MuiInputBase-input').type(firstname);
        cy.get('[data-testid="inputCustomerLastName"] > .MuiInputBase-root > .MuiInputBase-input').type(lastname);
        cy.get('[data-testid="inputCustomerCompany"] > .MuiInputBase-root > .MuiInputBase-input').type('Company name');
        cy.get('[data-testid="inputCustomerEmail"] > .MuiInputBase-root > .MuiInputBase-input').type(email);
        cy.get('[data-testid="inputCustomerPhone"] > .MuiInputBase-root > .MuiInputBase-input').type('123456789');
        return this;
    }

    fillInBillingAddress(firstname, lastname) {
        cy.get('[data-testid="inputCustomerDefaultBillingAddress"] > .MuiInputBase-root > .MuiInputBase-input').click();
        cy.get('[data-testid="firstNameTextField"] > .MuiInputBase-root > .MuiInputBase-input').type(firstname)
        cy.get('[data-testid="gridExtended"] > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type(lastname)
        cy.get('[data-testid="gridExtended"] > :nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type('Company')
        cy.get(':nth-child(4) > .MuiInputBase-root > .MuiInputBase-input').type('123456789')
        cy.get('[role="combobox"] > .MuiInputBase-root > .MuiInputBase-input').type('Address line 1')
        cy.get('[data-testid="gridStandard"] > :nth-child(1) > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('Address line 2')
        cy.get('[data-testid="gridStandard"] > :nth-child(1) > :nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type('City')
        cy.get(':nth-child(4) > .MuiGrid-container > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('State')
        cy.get(':nth-child(4) > .MuiGrid-container > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('123456')
        cy.get(':nth-child(5) > .MuiInputBase-root > .MuiInputBase-input').type('Country')
        cy.contains('Ok').click()
        return this;
    }

    validateAllChangesSaved() {
        cy.contains('All changes saved').should('be.visible');
        return this;
    }

}