// @ts-check
const { test, expect } = require('@playwright/test');

test('Login', async ({ page }) => {
    await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('admin');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('password123');
    await page.getByRole('button', { name: 'Sign in' }).click();
});
