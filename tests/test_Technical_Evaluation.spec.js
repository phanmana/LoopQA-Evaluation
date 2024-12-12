// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('admin');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('password123');
    await page.getByRole('button', { name: 'Sign in' }).click();
  });

// *********Test case 1*********

test('Navigate to "Web Application"', async ({ page }) => {
    // Navigate to "Web Application" & verify the header is visible
    await page.getByRole('button', { name: 'Web Application Main web' }).click(); 
    const header = await page.locator('xpath=/html/body/div/div/div[2]/header/div');
    await expect(header).toBeVisible();
});

test('Verify "Implement user authentication" is in the "To Do" column and only the "To Do" column', async ({ page }) => {
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

// *********Test case 2*********

test('Navigate to "Web Application"', async ({ page }) => {
    // Navigate to "Web Application" & verify the header is visible
    await page.getByRole('button', { name: 'Web Application Main web' }).click(); 
    const header = await page.locator('xpath=/html/body/div/div/div[2]/header/div');
    await expect(header).toBeVisible();
});

test('Verify "Fix navigation bug" is in the "To Do" column', async ({ page }) => {
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

// *********Test case 3*********

test('Navigate to "Web Application"', async ({ page }) => {
    // Navigate to "Web Application" & verify the header is visible
    await page.getByRole('button', { name: 'Web Application Main web' }).click(); 
    const header = await page.locator('xpath=/html/body/div/div/div[2]/header/div');
    await expect(header).toBeVisible();
});

test('Verify "Design system updates" is in the "In Progress" column', async ({ page }) => {
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

// *********Test case 4*********

test('Navigate to "Mobile Application"', async ({ page }) => {
    // Navigate to "Mobile Application" & verify the header is visible
    await page.getByRole('button', { name: 'Mobile Application Native' }).click(); 
    const header = await page.locator('xpath=/html/body/div/div/div[2]/header');
    await expect(header).toBeVisible();
});

test('Verify "Push notification system" is in the "To Do" column', async ({ page }) => {
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

// *********Test case 5*********

test('Navigate to "Mobile Application"', async ({ page }) => {
    // Navigate to "Mobile Application" & verify the header is visible
    await page.getByRole('button', { name: 'Mobile Application Native' }).click(); 
    const header = await page.locator('xpath=/html/body/div/div/div[2]/header');
    await expect(header).toBeVisible();
});

test('Verify "Offline mode" is in the "In Progress" column', async ({ page }) => {
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

// *********Test case 6*********

test('Navigate to "Mobile Application"', async ({ page }) => {
    // Navigate to "Mobile Application" & verify the header is visible
    await page.getByRole('button', { name: 'Mobile Application Native' }).click(); 
    const header = await page.locator('xpath=/html/body/div/div/div[2]/header'); 
    await expect(header).toBeVisible();
});

test('App icon design" is in the "Done" column', async ({ page }) => {
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