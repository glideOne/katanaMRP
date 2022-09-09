export class CreateCustomer {
    navigate() {
        cy.visit('https://factory.katanamrp.com/customer');
    }

    fillInCustomerFields(firstName, lastName, email) {
        cy.get('[data-testid="inputCustomerFirstName"] > .MuiInputBase-root > .MuiInputBase-input').type(firstName);
        cy.get('[data-testid="inputCustomerLastName"] > .MuiInputBase-root > .MuiInputBase-input').type(lastName);
        cy.get('[data-testid="inputCustomerCompany"] > .MuiInputBase-root > .MuiInputBase-input').type('Company name');
        cy.get('[data-testid="inputCustomerEmail"] > .MuiInputBase-root > .MuiInputBase-input').type(email);
        cy.get('[data-testid="inputCustomerPhone"] > .MuiInputBase-root > .MuiInputBase-input').type('123456789');
        return this;
    }

    fillInBillingAddress(firstName, lastName) {
        cy.get('[data-testid="inputCustomerDefaultBillingAddress"] > .MuiInputBase-root > .MuiInputBase-input').click();
        cy.get('[data-testid="firstNameTextField"] > .MuiInputBase-root > .MuiInputBase-input').type(firstName)
        cy.get('[data-testid="gridExtended"] > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type(lastName)
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

    clickAddShippingAddress() {
        cy.get('[data-testid="inputCustomerDefaultShippingAddress"] > .MuiInputBase-root > .MuiInputBase-input').click();
        return this;
    }

    fillInShippingAddress(firstName, lastName) {
        cy.get('[data-testid="firstNameTextField"] > .MuiInputBase-root > .MuiInputBase-input').type(firstName)
        cy.get('[data-testid="gridExtended"] > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type(lastName)
        cy.get('[data-testid="gridExtended"] > :nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type('Company')
        cy.get(':nth-child(4) > .MuiInputBase-root > .MuiInputBase-input').type('123456789')
        cy.get('[role="combobox"] > .MuiInputBase-root > .MuiInputBase-input').type('Address line 1')
        cy.get('[role="combobox"] > .MuiInputBase-root > .MuiInputBase-input').type('Address line 2')
        cy.get('[data-testid="gridStandard"] > :nth-child(1) > :nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type('City')
        cy.get(':nth-child(4) > .MuiGrid-container > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('State')
        cy.get(':nth-child(4) > .MuiGrid-container > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('123456')
        cy.get(':nth-child(5) > .MuiInputBase-root > .MuiInputBase-input').type('Country')
        cy.contains('Ok').click()
        return this;
    }

    fillInAnotherShippingAddress(firstName, lastName) {
        // cy.get('.jss34 > :nth-child(4) > div > .MuiButtonBase-root > .MuiButton-label').click();
        cy.contains('Add address').click();
        this.fillInShippingAddress(firstName, lastName);
        return this;
    }

    validateAllChangesSaved() {
        cy.contains('All changes saved').should('be.visible');
        return this;
    }

}