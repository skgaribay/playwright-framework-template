import { BasePage, step } from './BasePage';
import { Page, Locator } from '@playwright/test';

export class LoginPage extends BasePage {
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;

    constructor(page: Page) {
        super(page);
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }

    @step("Login with the provided credentials") 
    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    @step("Navigate to the login page")
    async gotoLogin() {
        await this.goto('');
    }

    @step("Get the login error message")
    async getLoginError(): Promise<string> {
        return await this.page.locator('[data-test="error"]').textContent() ?? '';
    }
        
}
