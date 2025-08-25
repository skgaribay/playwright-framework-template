import { BasePage, step } from './BasePage';
import { Page, Locator } from '@playwright/test';

export class LoginPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    // Private locators
    private get usernameInput(): Locator {
        return this.page.locator('#user-name');
    }

    private get passwordInput(): Locator {
        return this.page.locator('#password');
    }

    private get loginButton(): Locator {
        return this.page.locator('#login-button');
    }

    // Public locators, accessible from tests


    // Step methods
    @step("Login with the provided credentials") 
    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    @step("Navigate to the login page")
    async gotoLogin() {
        await this.page.goto('');
    }

    @step("Get the login error message")
    async getLoginError(): Promise<string> {
        return await this.page.locator('[data-test="error"]').textContent() ?? '';
    }

    // Helper methods
        
}
