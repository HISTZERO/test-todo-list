import { test, expect } from '@playwright/test';

test('Test Case: Test add function ', async ({ page }) => {
  await page.goto('https://fake-todo-list.vercel.app/todos');
  const todoInput = page.locator('input[placeholder="Add a new todo"]');
  const addButton = page.locator('button:has-text("Add")');
  await todoInput.fill('New Todo Item');
  await addButton.click();
  const todoItem = page.locator('label:has-text("New Todo Item")');
  await expect(todoItem).toBeVisible();
});