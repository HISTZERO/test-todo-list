import { test, expect } from '@playwright/test';

test('Test Case: Test2', async ({ page }) => {
  await page.goto('https://fake-todo-list.vercel.app/todos');

  await page.locator('input#mat-input-0').click();
  await page.locator('input#mat-input-0').fill('a');
  await page.locator('input#mat-input-0').fill('ab');
  await page.locator('input#mat-input-0').fill('abc');
  await page.locator('span.mdc-button__label').click();
});
