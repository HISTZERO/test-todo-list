import { test, expect } from '@playwright/test';

test('Test Case: Test add function ', async ({ page }) => {
  await page.goto('https://fake-todo-list.vercel.app/todos');
  const inputBox = page.locator('input#new-todo');
  await inputBox.fill('New Todo Item');
  await inputBox.press('Enter');
  const newItem = page.locator('text=New Todo Item');
  await expect(newItem).toBeVisible();
});