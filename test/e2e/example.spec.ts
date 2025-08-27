import { test, expect } from "@playwright/test";

test("Homepage loads and renders the title", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await expect(page).toHaveTitle(/Playwright/);
});
