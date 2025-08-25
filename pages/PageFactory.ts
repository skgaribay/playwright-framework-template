import { Page } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { ProductsPage } from './ProductsPage';

export class PageFactory {
    private _loginPage?: LoginPage;
    private _productsPage?: ProductsPage;

    // Constructor to initialize the page factory with a Playwright Page instance

    constructor(private page: Page) {}

    get loginPage(): LoginPage {
        if (!this._loginPage) {
            this._loginPage = new LoginPage(this.page);
        }
        return this._loginPage;
    }

    get productsPage(): ProductsPage {
        if (!this._productsPage) {
            this._productsPage = new ProductsPage(this.page);
        }
        return this._productsPage;
    }
    // Add more page getters as needed
}

// make sure to export the page types for use in tests
export type { LoginPage, ProductsPage };