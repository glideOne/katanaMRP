export class Dashboard {

    clickPlusButton() {
        cy.get('#globalAdd > span.MuiFab-label > svg > path').click();
        return this;
    }

    goToCreateCustomer() {
        this.clickPlusButton();
        cy.contains('Customer').click();
        return this;
    }

    goToCreateSalesOrder() {
        this.clickPlusButton();
        cy.get('#add-sales > .MuiListItemText-root > .MuiTypography-root').click();
        return this;
    }

}