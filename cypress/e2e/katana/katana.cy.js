import {Login} from "../../pages/Login";
import {CreateCustomer} from "../../pages/CreateCustomer";
import {CreateSalesOrder} from "../../pages/CreateSalesOrder";
import {Dashboard} from "../../pages/Dashboard";
import {Utils} from "../../utils/Utils";
import {Sell} from "../../pages/Sell";

const login = new Login();
const utils = new Utils();
let dashboard;
let createCustomer;
let createSalesOrder;
let sell;

//Test Data
let firstName = null;
let lastName = null;
const email = 'ovidiu.zakarias@gmail.com'
const password = 'Thisisnotmyactualpassworddonttrytohackme1'

describe('Katana MRP Customer tests', () => {
    before(() => {
        firstName = utils.generateString(4);
        lastName = utils.generateString(6);
        cy.viewport(1920, 1080)
        login.navigate()
        login.login(email, password);
        dashboard = new Dashboard();
    })

    // it('Create a new Customer', () => {
    //     dashboard.goToCreateCustomer();
    //     createCustomer = new CreateCustomer();
    //
    //     createCustomer.fillInCustomerFields(firstName, lastName, email);
    //     createCustomer.fillInBillingAddress(firstName, lastName);
    //     createCustomer.validateAllChangesSaved();
    // })
    //
    // it('Create a Customer on a Sales Order', () => {
    //     dashboard.goToCreateSalesOrder();
    //     createSalesOrder = new CreateSalesOrder();
    //
    //     createSalesOrder.createCustomer(utils.generateString(6));
    //     createSalesOrder.validateAllChangesSaved();
    // })
    //
    // it('Add existing Customer to existing Sales Order', () => {
    //     dashboard.goToCreateSalesOrder();
    //     createSalesOrder = new CreateSalesOrder();
    //     createSalesOrder.searchCustomer(firstName, lastName);
    //     createSalesOrder.validateAllChangesSaved();
    // })

    // it('Search for existing customer', () => {
    //     dashboard.goToSell();
    //     sell = new Sell();
    //     sell.searchForCustomer('Ovidiu Zakarias');
    //     sell.validateSearchResult('Ovidiu Zakarias');
    // })

    it('Customer cannot be created without display name', () => {

    })

})