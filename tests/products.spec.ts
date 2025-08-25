import { test, expect } from './fixtures';
import type { LoginPage, ProductsPage } from '../pages/PageFactory';
import {USERNAME, PASSWORD} from './globals';
import path from 'path';

const storageFile = path.join(__dirname, '..', 'states', 'productsState.json');

test.describe('Products page tests', () => {
    let loginPage: LoginPage;
    let productsPage: ProductsPage;

    test.beforeEach(async ({ pageFactory }) => {
        loginPage = pageFactory.loginPage;
        productsPage = pageFactory.productsPage;
        await loginPage.gotoLogin();
        await loginPage.login(USERNAME, PASSWORD);
    });

    test('Verify that the products page is displayed after login', async () => {
        await test.step('Check that the products header is visible', async () => {
            await expect(productsPage.headerLocator).toBeVisible();
        });
        await new Promise(resolve => setTimeout(resolve, 2000));
    });

    test('Verify that the cart button is clickable', async () => {
        await productsPage.clickCart();
        await new Promise(resolve => setTimeout(resolve, 2000));
    });

    // Additional product page tests can be added here
});