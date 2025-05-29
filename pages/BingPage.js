import { expect } from '@playwright/test';
import BasePage from '../utils/BasePage.js';

export default class BingPage extends BasePage {
    constructor(page) {
        super(page);
        this.searchInput = 'input[name="q"]';
        this.resultsContainer = '#b_results';
    }

    async navigate() {
        await this.goto('/');
    }

    async search(query) {
        await this.type(this.searchInput, query);
        await this.page.press(this.searchInput, 'Enter');
    }

    async verifyResultsVisible() {
        await expect(this.page.locator(this.resultsContainer)).toBeVisible();
    }
}
