import { BasePage, step } from './BasePage';
import { Page, Locator } from '@playwright/test';

    export class ProductsPage extends BasePage {

        constructor(page: Page) {
            super(page);
        }

        // Private locators
        private get cartButton(): Locator {
            return this.page.locator('#shopping_cart_container');
        }

        // Public locators, accessible from tests
        get headerLocator(): Locator {
            return this.page.locator('text=Products');
        }

        // Step methods
        @step("Click on the cart button")
        async clickCart() {
            await this.cartButton.click();
        }

        // Helper methods
    }
