export default class BasePage {
    constructor(page) {
        this.page = page;
    }

    async goto(url) {
        await this.page.goto(url);
    }

    async click(locator) {
        await this.page.click(locator);
    }

    async type(locator, value) {
        await this.page.fill(locator, value);
    }
}
