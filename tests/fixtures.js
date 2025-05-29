import { test as base } from 'playwright-bdd';
import POManager from '../utils/POManager.js';

export const test = base.extend({
    pom: async ({ page }, use) => {
        const pom = new POManager(page);
        await use(pom);
    }
});

export { expect } from '@playwright/test';
