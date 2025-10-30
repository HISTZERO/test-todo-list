import { test, expect } from '@playwright/test';

test('Test Case: Test2', async ({ page }) => {
  await page.goto('https://fake-todo-list.vercel.app/todos');
  await page.locator('input#mat-input-0').click();
  await page.locator('input#mat-input-0').fill('T');
  await page.locator('input#mat-input-0').fill('TEs');
  await page.locator('input#mat-input-0').fill('TE');
  await page.locator('input#mat-input-0').fill('TEst2');
  await page.locator('input#mat-input-0').fill('TEst');
  await page.locator('html > body > app-root > main.main-container > app-todo-list > mat-card.mat-mdc-card.mdc-card.todo-container > mat-card-content.mat-mdc-card-content > app-todo-form > form.todo-form.ng-untouched.ng-pristine.ng-valid > button.mdc-button.mat-mdc-button-base.todo-add-button.mdc-button--raised.mat-mdc-raised-button.mat-primary.cdk-focused.cdk-mouse-focused > span.mdc-button__label').click();
});