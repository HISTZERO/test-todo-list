import { test, expect } from '@playwright/test';

test('Login Functionality', async ({ page }) => {
  await page.goto('https://fake-todo-list.vercel.app/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('testuser');
  await page.getByRole('textbox', { name: 'Password' }).fill('testpass');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/dashboard/);
});