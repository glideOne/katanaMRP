import {Login} from "../../pages/Login";
import {CreateCustomer} from "../../pages/CreateCustomer";
import {CreateSalesOrder} from "../../pages/CreateSalesOrder";
import {Dashboard} from "../../pages/Dashboard";
import {Utils} from "../../utils/Utils";

const login = new Login();
const utils = new Utils();
let dashboard;
let createCustomer;
let createSalesOrder;

//Test Data
const firstName = 'Ovidiu'
const lastName = 'Zakarias'
const email = 'ovidiu.zakarias@gmail.com'
const password = 'Thisisnotmyactualpassworddonttrytohackme1'

describe('Katana MRP Create Customer', () => {
    before(() => {
        cy.viewport(1920, 1080)
        login.navigate()
        login.login(email, password);
        dashboard = new Dashboard();
    })

    it('Creates a new customer', () => {
        dashboard.goToCreateCustomer();
        createCustomer = new CreateCustomer();

        createCustomer.fillInCustomerFields(firstName, lastName, email);
        createCustomer.fillInBillingAddress(firstName, lastName);
        createCustomer.validateAllChangesSaved();
    })

    it('Creates a customer on a Sales Order', () => {
        dashboard.goToCreateSalesOrder();
        createSalesOrder = new CreateSalesOrder();

        createSalesOrder.createCustomer(utils.generateString(6));
        createSalesOrder.validateAllChangesSaved();
    })

    it('Search for existing customers', () => {

    })

})