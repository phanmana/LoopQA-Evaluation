// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');

// Test case 4

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

test('Verify "Push notification system" is in the "To Do" column', async ({ page }) => {
    await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('admin');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('password123');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('button', { name: 'Mobile Application Native' }).click(); 
    // Ensure we are in the "To Do" column
    const toDoColumn = await page.locator('text=To Do').locator('..');
    // Check that "Push notification system" is in the "To Do" column
    const taskInToDo = await toDoColumn.getByText('Push notification system');
    expect(await taskInToDo.isVisible()).toBeTruthy();

    // Ensure the task is not in the "In Progress" column
    const inProgressColumn = await page.locator('text=In Progress').locator('..');
    const taskInProgress = await inProgressColumn.getByText('Push notification system');
    expect(await taskInProgress.count()).toBe(0);
    
    // Ensure the task is not in the "Done" column
    const doneColumn = await page.locator('text=Done').locator('..');
    const taskInDone = await doneColumn.getByText('Push notification system');
    expect(await taskInDone.count()).toBe(0);
});

test('Confirm tags: Feature', async ({ page }) => {
    await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('admin');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('password123');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('button', { name: 'Mobile Application Native' }).click();

    // Ensure we are in the "To Do" column
    await page.getByText('To Do').click();

    // Check that "Push notification system" is in the "To Do" column
    const taskInToDo = await page.getByText('Push notification system');
    expect(await taskInToDo.isVisible()).toBeTruthy();

    // Locate the task box for "Design system updates"
    const taskBox = taskInToDo.locator('..');

    // Check that "Feature" tag is present
    const featureTag = taskBox.locator('text=Feature');
    expect(await featureTag.isVisible()).toBeTruthy();
});