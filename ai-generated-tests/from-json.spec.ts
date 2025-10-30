import { test, expect } from '@playwright/test';

test("Test1", async ({ page }) => {
  // 0. Navigate to target_url
  await page.goto("https://fake-todo-list.vercel.app/todos");

  // 1. Type 'T' into INPUT
  await page.locator("input#mat-input-0").fill("T");

  // 2. Type 'Tes' into INPUT
  await page.locator("input#mat-input-0").fill("Tes");

  // 2. Type 'Test1' into INPUT
  await page.locator("input#mat-input-0").fill("Test1");

  // 3. Type 'Test' into INPUT
  await page.locator("input#mat-input-0").fill("Test");

  // 3. Type 'Te' into INPUT
  await page.locator("input#mat-input-0").fill("Te");

  // 4. Click on SPAN
  await page.locator("html > body > app-root > main.main-container > app-todo-list > mat-card.mat-mdc-card.mdc-card.todo-container > mat-card-content.mat-mdc-card-content > app-todo-form > form.todo-form.ng-untouched.ng-pristine.ng-valid > button.mdc-button.mat-mdc-button-base.todo-add-button.mdc-button--raised.mat-mdc-raised-button.mat-primary.cdk-focused.cdk-mouse-focused > span.mdc-button__label").click();

  // 4. Click on DIV
  await page.locator("html > body > app-root > main.main-container > app-todo-list > mat-card.mat-mdc-card.mdc-card.todo-container > mat-card-content.mat-mdc-card-content > app-todo-form > form.todo-form.ng-untouched.ng-pristine.ng-valid > mat-form-field.mat-mdc-form-field.form-field.mat-mdc-form-field-type-mat-input.mat-form-field-appearance-outline.mat-form-field-hide-placeholder.mat-primary.ng-untouched.ng-pristine.ng-invalid.mat-form-field-animations-enabled > div.mat-mdc-text-field-wrapper.mdc-text-field.mdc-text-field--outlined > div.mat-mdc-form-field-flex > div.mat-mdc-form-field-infix").click();
});