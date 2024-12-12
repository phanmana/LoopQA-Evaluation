// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');

// Test case 5

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

test('Verify "Offline mode" is in the "In Progress" column', async ({ page }) => {
    await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('admin');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('password123');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('button', { name: 'Mobile Application Native' }).click(); 
    // Ensure we are in the "In Progress" column
    const inProgressColumn = await page.locator('text=In Progress').locator('..');
    // Check that "Offline mode" is in the "In Progress" column
    const taskInInProgress = await inProgressColumn.getByText('Offline mode');
    expect(await taskInInProgress.isVisible()).toBeTruthy();

    // Ensure the task is not in the "To Do" column
    const toDoColumn = await page.locator('text=To Do').locator('..');
    const taskInToDo = await toDoColumn.getByText('Offline mode');
    expect(await taskInToDo.count()).toBe(0);
    
    // Ensure the task is not in the "Done" column
    const doneColumn = await page.locator('text=Done').locator('..');
    const taskInDone = await doneColumn.getByText('Offline mode');
    expect(await taskInDone.count()).toBe(0);
});

test('Confirm tags: "Feature" & "High Priority”', async ({ page }) => {
    await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('admin');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('password123');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('button', { name: 'Mobile Application Native' }).click();

    // Ensure we are in the "In Progess" column
    await page.getByText('In Progress').click();

    // Check that "Offline mode" is in the "In Progress" column
    const taskInInProgress = await page.getByText('Offline mode');
    expect(await taskInInProgress.isVisible()).toBeTruthy();

    // Locate the task box for "Offline mode"
    const taskBox = taskInInProgress.locator('..');

    // Check that "Feature" tag is present
    const featureTag = taskBox.locator('text=Feature');
    expect(await featureTag.isVisible()).toBeTruthy();

    // Check that "High Priority" tag is present
    const highPriorityTag = taskBox.locator('text=High Priority');
    expect(await highPriorityTag.isVisible()).toBeTruthy();
});