// @ts-check
const { test, expect } = require('@playwright/test');

// Test case 2

test('Navigate to "Web Application"', async ({ page }) => {
    await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('admin');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('password123');
    await page.getByRole('button', { name: 'Sign in' }).click();
    // Navigate to "Web Application" & verify the header is visible
    await page.getByRole('button', { name: 'Web Application Main web' }).click(); 
    const header = await page.locator('xpath=/html/body/div/div/div[2]/header/div');
    await expect(header).toBeVisible();
});

test('Verify "Fix navigation bug" is in the "To Do" column', async ({ page }) => {
    await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('admin');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('password123');
    await page.getByRole('button', { name: 'Sign in' }).click();

    // Ensure we are in the "To Do" column
    const toDoColumn = await page.locator('text=To Do').locator('..');
    // Check that "Implement user authentication" is in the "To Do" column
    const taskInToDo = await toDoColumn.getByText('Fix navigation bug');
    expect(await taskInToDo.isVisible()).toBeTruthy();

    // Ensure the task is not in the "In Progress" column
    const inProgressColumn = await page.locator('text=In Progress').locator('..');
    const taskInProgress = await inProgressColumn.getByText('Fix navigation bug');
    expect(await taskInProgress.count()).toBe(0);

    // Ensure the task is not in the "Done" column
    const doneColumn = await page.locator('text=Done').locator('..');
    const taskInDone = await doneColumn.getByText('Fix navigation bug');
    expect(await taskInDone.count()).toBe(0);
});

test('Confirm tags: "Bug"', async ({ page }) => {
    await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('admin');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('password123');
    await page.getByRole('button', { name: 'Sign in' }).click();

    // Ensure we are in the "To Do" column
    await page.getByText('To Do').click();

    // Check that "Fix navigation bug" is in the "To Do" column
    const taskInToDo = await page.getByText('Fix navigation bug');
    expect(await taskInToDo.isVisible()).toBeTruthy();

    // Locate the task box for "Fix navigation bug"
    const taskBox = taskInToDo.locator('..');

    // Check that "Bug" tag is present
    const bugTag = taskBox.locator('span:has-text("Bug")');
    expect(await bugTag.isVisible()).toBeTruthy();
});
