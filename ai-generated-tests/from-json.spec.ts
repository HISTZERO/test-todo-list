import { test, expect } from '@playwright/test';

test("Test5", async ({ page }) => {
  // 0. Navigate to target_url
  await page.goto("https://fake-todo-list.vercel.app/todos");

  // 1. Click on INPUT
  await page.locator("input#mat-input-0").click();

  // 2. Type 'Test' into INPUT
  await page.locator("input#mat-input-0").fill("Test");

  // 3. Type 'T' into INPUT
  await page.locator("input#mat-input-0").fill("T");

  // 3. Type 'Tes' into INPUT
  await page.locator("input#mat-input-0").fill("Tes");

  // 3. Type 'Test1' into INPUT
  await page.locator("input#mat-input-0").fill("Test1");

  // 4. Type 'Te' into INPUT
  await page.locator("input#mat-input-0").fill("Te");

  // 5. Click on SPAN
  await page.locator("html > body > app-root > main.main-container > app-todo-list > mat-card.mat-mdc-card.mdc-card.todo-container > mat-card-content.mat-mdc-card-content > app-todo-form > form.todo-form.ng-untouched.ng-pristine.ng-valid > button.mdc-button.mat-mdc-button-base.todo-add-button.mdc-button--raised.mat-mdc-raised-button.mat-primary.cdk-focused.cdk-mouse-focused > span.mdc-button__label").click();
});