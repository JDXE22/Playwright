import { test, expect, Browser, Page } from "@playwright/test";

(async () => {
  let browser: Browser;
  let page: Page;

  test.describe("Actions in the Automation Sadbox", () => {
    test("Click in the dinamyc Id", async ({ page }) => {
      await test.step("Since I am navigating the Sandbox of FreeRangers", async () => {
        await page.goto(
          "https://thefreerangetester.github.io/sandbox-automation-testing/"
        );
      });

      await test.step("When I click in the button with dinamyc id", async () => {
        await page
          .getByRole(`button`, {
            name: `Hacé click para generar un ID dinámico y mostrar el elemento oculto`,
          })
          .click();
      });
    });

    test("Filling out a text field in the Automation Sandbox", async ({
      page,
    }) => {
      await test.step("Since I am navigating the Sandbox of FreeRangers ", async () => {
        await page.goto(
          "https://thefreerangetester.github.io/sandbox-automation-testing/"
        );
      });
      await test.step("When I fill out the text field with my name", async () => {
        await page.getByPlaceholder("Ingresá texto").fill("Juan");
      });
    });
  });
})();
