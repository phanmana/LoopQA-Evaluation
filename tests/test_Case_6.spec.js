// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');

// Test case 6

test('Navigate to "Mobile Application"', async ({ page }) => {
    await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('admin');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('password123');
    await page.getByRole('button', { name: 'Sign in' }).click();

    // Navigate to "Mobile Application" & verify the header is visible
    await page.getByRole('button', { name: 'Mobile Application Native' }).click(); 
    const header = await page.locator('xpath=/html/body/div/div/div[2]/header'); 
    await expect(header).toBeVisible();
});

test('App icon design" is in the "Done" column', async ({ page }) => {
    await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('admin');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('password123');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('button', { name: 'Mobile Application Native' }).click(); 
    // Ensure we are in the "Done" column
    const doneColumn = await page.locator('text=Done').locator('..');
    // Check that "App icon design" is in the "Done" column
    const taskInDone = await doneColumn.getByText('App icon design');
    expect(await taskInDone.isVisible()).toBeTruthy();

    // Ensure the task is not in the "To Do" column
    const toDoColumn = await page.locator('text=To Do').locator('..');
    const taskInToDo = await toDoColumn.getByText('App icon design');
    expect(await taskInToDo.count()).toBe(0);
    
    // Ensure the task is not in the "In Progress" column
    const inProgressColumn = await page.locator('text=In Progress').locator('..');
    const taskInProgress = await inProgressColumn.getByText('App icon design');
    expect(await taskInProgress.count()).toBe(0);
});

test('Confirm tags: "Design"', async ({ page }) => {
    await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('admin');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('password123');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('button', { name: 'Mobile Application Native' }).click();

    // Ensure we are in the "Done" column
    await page.getByText('Done').click();

    // Check that "App icon design" is in the "Done" column
    const taskInDone = await page.getByText('App icon design');
    expect(await taskInDone.isVisible()).toBeTruthy();

    // Locate the task box for "App icon design"
    const taskBox = taskInDone.locator('..');

    // Check that "Design" tag is presentt
    const designTag = taskBox.locator('span:has-text("Design")');
    expect(await designTag.isVisible()).toBeTruthy();
});