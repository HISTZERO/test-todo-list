import { test, expect } from '@playwright/test';

test("1 Test Input", async ({ page }) => {
  // 0. Navigate to target_url
  await page.goto("http://example.com");

  // 1. Click on INPUT
  await page.locator("input#mat-input-0").click();

  // 2. Type 'Te' into INPUT
  await page.locator("input#mat-input-0").fill("Te");

  // 3. Type 'Test' into INPUT
  await page.locator("input#mat-input-0").fill("Test");

  // 3. Click on SPAN
  await page.locator("html > body > app-root > main.main-container > app-todo-list > mat-card.mat-mdc-card.mdc-card.todo-container > mat-card-content.mat-mdc-card-content > app-todo-form > form.todo-form.ng-untouched.ng-pristine.ng-valid > button.mdc-button.mat-mdc-button-base.todo-add-button.mdc-button--raised.mat-mdc-raised-button.mat-primary.cdk-focused.cdk-mouse-focused > span.mat-mdc-button-touch-target").click();
});