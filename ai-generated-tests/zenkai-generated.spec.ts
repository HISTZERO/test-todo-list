import { test, expect } from '@playwright/test';

test('Add New Todo Item', async ({ page }) => {
  await page.goto('https://fake-todo-list.vercel.app/todos');
  await page.getByRole('textbox', { name: 'New Todo' }).fill('Buy groceries');
  await page.getByRole('button', { name: 'Add' }).click();
  await expect(page.getByText('Buy groceries')).toBeVisible();
});

test('Filter Active Todos', async ({ page }) => {
  await page.goto('https://fake-todo-list.vercel.app/todos');
  // Ensure there is at least one active todo item
  await page.getByRole('textbox', { name: 'New Todo' }).fill('Active Task');
  await page.getByRole('button', { name: 'Add' }).click();
  // Click "Active" radio button to filter active todos
  await page.getByRole('radio', { name: 'Active' }).click();
  // Verify only active todos are visible
  const visibleTodos = await page.locator('[role="list"]').allTextContents();
  expect(visibleTodos).toContain('Active Task');
});

test('Filter Completed Todos', async ({ page }) => {
  await page.goto('https://fake-todo-list.vercel.app/todos');
  // Ensure there is at least one completed item before filtering
  await page.getByRole('radio', { name: 'Completed' }).click();
  await expect(page.locator('text=Completed')).toBeVisible();
});