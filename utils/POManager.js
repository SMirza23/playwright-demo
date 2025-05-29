import { BingPage } from '../pages/BingPage.js';

export default class POManager {
    constructor(page) {
        this.page = page;
        this.bingPage = new BingPage(page);
    }

    getBingPage() {
        return this.bingPage;
    }
}
