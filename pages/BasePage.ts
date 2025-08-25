import { Page, Locator } from '@playwright/test';
import { test } from '@playwright/test'

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // if you need to access a locator in a test by text
    getLocatorByText(text: string, exact: boolean = true): Locator {
		return this.page.getByText(text, { exact });
	}

    // protected locator(selector: string): Locator {
    //     return this.page.locator(selector);
    // }

    // async goto(url: string) {
    //     await this.page.goto(url);
    // }

    // async click(selector: string) {
    //     await this.locator(selector).click();
    // }

    // async fill(selector: string, value: string) {
    //     await this.locator(selector).fill(value);
    // }

    // async isVisible(selector: string): Promise<boolean> {
    //     return await this.locator(selector).isVisible();
    // }

    // async getText(selector: string): Promise<string> {
    //     return await this.locator(selector).textContent() ?? '';
    // }
}

// Decorator to wrap methods in test.step for better reporting
export function step(stepName?: string) {
    return function decorator(
        target: Function,
        context: ClassMethodDecoratorContext
    ) {
        return function replaceMethod(...args: any[]) {
            const name =  stepName || `${this.constructor.name}.${context.name as string}`;
            return test.step(name, async () => {
                return await target.call(this, ...args);
            })
        }
    }
}
