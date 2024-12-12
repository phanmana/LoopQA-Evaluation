// @ts-check
const { test, expect } = require('@playwright/test');

// Test case 3

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

test('Verify "Design system updates" is in the "In Progress" column', async ({ page }) => {
    await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('admin');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('password123');
    await page.getByRole('button', { name: 'Sign in' }).click();

    // Ensure we are in the "In Progress" column
    const inProgressColumn = await page.locator('text=In Progress').locator('..');
    // Check that "Design system updates" is in the "In Progress" column
    const taskInInProgress = await inProgressColumn.getByText('Design system updates');
    expect(await taskInInProgress.isVisible()).toBeTruthy();

    // Ensure the task is not in the "To Do" column
    const toDoColumn = await page.locator('text=To Do').locator('..');
    const taskInToDo = await toDoColumn.getByText('Design system updates');
    expect(await taskInToDo.count()).toBe(0);

    // Ensure the task is not in the "Done" column
    const doneColumn = await page.locator('text=Done').locator('..');
    const taskInDone = await doneColumn.getByText('Implement user authentication');
    expect(await taskInDone.count()).toBe(0);
});

test('Confirm tags: Design', async ({ page }) => {
    await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('admin');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('password123');
    await page.getByRole('button', { name: 'Sign in' }).click();

    // Ensure we are in the "In Progress" column
    await page.getByText('In Progress').click();

    // Check that "Design system updates" is in the "In Progress" column
    const taskInInProgress = await page.getByText('Design system updates');
    expect(await taskInInProgress.isVisible()).toBeTruthy();

    // Locate the task box for "Design system updates"
    const taskBox = taskInInProgress.locator('..');

    // Check that "Design" tag is present
    const designTag = taskBox.locator('span:has-text("Design")');
    expect(await designTag.isVisible()).toBeTruthy();
});