import { test, expect } from './fixtures';
import type { LoginPage, ProductsPage } from '../pages/PageFactory';
import {USERNAME, PASSWORD} from './globals';

test.describe('Login functionality', () => {
    let loginPage: LoginPage;
    let productsPage: ProductsPage;

    // pageFactory is provided by the fixtures
    test.beforeEach(async ({ pageFactory }) => {
        loginPage = pageFactory.loginPage;
        productsPage = pageFactory.productsPage;
        await loginPage.gotoLogin();
    });

    test('user can log in and see products', async () => {
        await loginPage.login(USERNAME, PASSWORD);
        await test.step('Verify that the header is visible', async () => {
            await expect(productsPage.headerLocator).toBeVisible();
        });
    });

    test('user cannot log in with invalid credentials', {tag: ['@smoke', '@negative']}, async () => {
        await loginPage.login('invalid_user', 'wrong_password');
        const errorValue = await loginPage.getLoginError();
        test.step('Verify login error message', async () => {
            expect(errorValue).toBe('Epic sadface: Username and password do not match any user in this service');
        });
    });

    test('user cannot log in without username', async () => {
        await loginPage.login('','');
        const errorValue = await loginPage.getLoginError();
        test.step('Verify login error message', async () => {
            expect(errorValue).toBe('Epic sadface: Username is required');
        });
    });

    test('user cannot log in without password', async () => {
        await loginPage.login('standard_user', '');
        const errorValue = await loginPage.getLoginError();
        test.step('Verify login error message', async () => {
            expect(errorValue).toBe('Epic sadface: Password is required');
        });
    });

    test('user cannot log in with locked out user', async () => {
        await loginPage.login('locked_out_user', PASSWORD);
        const errorValue = await loginPage.getLoginError();
        test.step('Verify login error message', async () => {
            expect(errorValue).toBe('Epic sadface: Sorry, this user has been locked out.');
        });
    });
    // Additional tests can be added here
});
