import { test, expect } from '@playwright/test';

test("Test Input and Button Click", async ({ page }) => {
  // 0. Navigate to target_url
  await page.goto("http://example.com");

  // 1. Click on INPUT
  await page.locator("input#mat-input-0").click();

  // 2. Fill 'a' into INPUT
  await page.locator("input#mat-input-0").fill("a");

  // 2. Fill 'ab' into INPUT
  await page.locator("input#mat-input-0").fill("ab");

  // 3. Fill 'abc' into INPUT
  await page.locator("input#mat-input-0").fill("abc");

  // 3. Click on SPAN
  await page.locator("html > body > app-root > main.main-container > app-todo-list > mat-card.mat-mdc-card.mdc-card.todo-container > mat-card-content.mat-mdc-card-content > app-todo-form > form.todo-form.ng-untouched.ng-pristine.ng-valid > button.mdc-button.mat-mdc-button-base.todo-add-button.mdc-button--raised.mat-mdc-raised-button.mat-primary.cdk-focused.cdk-mouse-focused > span.mdc-button__label").click();
});