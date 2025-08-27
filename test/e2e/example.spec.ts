import { test, expect, Browser, Page } from "@playwright/test";

(async () => {
  let browser: Browser;
  let page: Page;

  test.describe("Navigation on FreeRangers", () => {
    test("Main links redirect correctly", async ({ page }) => {
      await test.step("Given I go to the home page", async () => {
        page.goto("https://www.freerangetesters.com");
        await expect(page).toHaveTitle(/Free Range Testers/);
      });
      await test.step("When I click on the courses link", async () => {
        page
          .locator("#page_header")
          .getByRole("link", { name: "Cursos", exact: true })
          .click();
        await page.waitForURL("**/cursos");
      });

      await test.step('Then I should see the "Cursos" page', async () => {
        await expect(page).toHaveTitle(/Cursos/);
      });
    });
  });
})();
