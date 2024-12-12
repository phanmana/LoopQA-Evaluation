// @ts-check
const { test, expect } = require('@playwright/test');

// Test case 1

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

test('Verify "Implement user authentication" is in the "To Do" column and only the "To Do" column', async ({ page }) => {
    await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('admin');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('password123');
    await page.getByRole('button', { name: 'Sign in' }).click();

    // Ensure we are in the "To Do" column
    const toDoColumn = await page.locator('text=To Do').locator('..');
    // Check that "Implement user authentication" is in the "To Do" column
    const taskInToDo = await toDoColumn.getByText('Implement user authentication');
    expect(await taskInToDo.isVisible()).toBeTruthy();

    // Ensure the task is not in the "In Progress" column
    const inProgressColumn = await page.locator('text=In Progress').locator('..');
    const taskInProgress = await inProgressColumn.getByText('Implement user authentication');
    expect(await taskInProgress.count()).toBe(0);

    // Ensure the task is not in the "Done" column
    const doneColumn = await page.locator('text=Done').locator('..');
    const taskInDone = await doneColumn.getByText('Implement user authentication');
    expect(await taskInDone.count()).toBe(0);
});

test('Confirm tags: "Feature" "High Priority” in the "Implement user authentication" box', async ({ page }) => {
    await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('admin');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('password123');
    await page.getByRole('button', { name: 'Sign in' }).click();

    // Ensure we are in the "To Do" column
    await page.getByText('To Do').click();

    // Check that "Implement user authentication" is in the "To Do" column
    const taskInToDo = await page.getByText('Implement user authentication');
    expect(await taskInToDo.isVisible()).toBeTruthy();

    // Locate the task box for "Implement user authentication"
    const taskBox = taskInToDo.locator('..');

    // Check that "Feature" tag is present
    const featureTag = taskBox.locator('text=Feature');
    expect(await featureTag.isVisible()).toBeTruthy();

    // Check that "High Priority" tag is present
    const highPriorityTag = taskBox.locator('text=High Priority');
    expect(await highPriorityTag.isVisible()).toBeTruthy();
});