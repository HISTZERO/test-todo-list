import { test, expect } from '@playwright/test';

test("Test4", async ({ page }) => {
  // 0. Navigate to target_url
  await page.goto("https://fake-todo-list.vercel.app/todos");

  // 1. Click on INPUT
  await page.locator("input#mat-input-0").click();

  // 2. Type 'TES' into INPUT
  await page.locator("input#mat-input-0").fill("TES");

  // 2. Type 'T' into INPUT
  await page.locator("input#mat-input-0").fill("T");

  // 3. Type 'TEST' into INPUT
  await page.locator("input#mat-input-0").fill("TEST");

  // 4. Type 'TE' into INPUT
  await page.locator("input#mat-input-0").fill("TE");

  // 4. Type 'TEST!' into INPUT
  await page.locator("input#mat-input-0").fill("TEST!");

  // 5. Type 'TEST!@' into INPUT
  await page.locator("input#mat-input-0").fill("TEST!@");

  // 6. Type 'TEST!@#' into INPUT
  await page.locator("input#mat-input-0").fill("TEST!@#");

  // 6. Type 'TEST!@#$' into INPUT
  await page.locator("input#mat-input-0").fill("TEST!@#$");

  // 7. Click on SPAN
  await page.locator("html > body > app-root > main.main-container > app-todo-list > mat-card.mat-mdc-card.mdc-card.todo-container > mat-card-content.mat-mdc-card-content > app-todo-form > form.todo-form.ng-untouched.ng-pristine.ng-valid > button.mdc-button.mat-mdc-button-base.todo-add-button.mdc-button--raised.mat-mdc-raised-button.mat-primary.cdk-focused.cdk-mouse-focused > span.mat-mdc-button-touch-target").click();
});