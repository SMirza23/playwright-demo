import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import dotenv from 'dotenv';

dotenv.config();

const bddConfig = defineBddConfig({
    paths: ['features/**/*.feature'],
    require: ['steps/**/*.js']
});

export default defineConfig({
    ...bddConfig,
    testMatch: '**/*.feature',
    use: {
        baseURL: process.env.BASE_URL || 'https://www.bing.com',
        headless: true
    },
    reporter: [['html', { open: 'never' }]]
});
