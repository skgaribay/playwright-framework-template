import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

    export class ProductsPage extends BasePage {
        readonly headerLocator: Locator

        constructor(page: Page) {
            super(page);
            this.headerLocator = this.page.locator('text=Products');
        }
    }
