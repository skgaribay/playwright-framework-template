import { test as base } from '@playwright/test';
import { PageFactory } from '../pages/PageFactory';
import fs from 'fs';

type Fixtures = {
    pageFactory: PageFactory;
};

export const test = base.extend<Fixtures>({

    pageFactory: async ({ page }, use) => {
        const factory = new PageFactory(page);
        await use(factory);
    },
});

export { expect } from '@playwright/test';
