import { Given, When, Then } from '@cucumber/cucumber';

Given('the user is on Bing home page', async function () {
    await this.page.goto('/');
});

When('the user searches for {string}', async function (query) {
    await this.page.fill('input[name="q"]', query);
    await this.page.press('input[name="q"]', 'Enter');
});

Then('search results should be visible', async function () {
    await this.page.waitForSelector('#b_results');
});
