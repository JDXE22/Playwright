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

    test("Checkboxes can be selected in the Automation Sandbox", async ({
      page,
    }) => {
      await test.step("Since I am navigating the Sandbox of FreeRangers", async () => {
        await page.goto(
          "https://thefreerangetester.github.io/sandbox-automation-testing/"
        );
      });

      await test.step("I can select the option 'Pasta'", async () => {
        await page.getByLabel("Pasta 🍝").check();
        await page.getByLabel("Pasta 🍝").uncheck();
      });
    });

    test("Radio buttons can be selected in the Automation Sandbox", async ({
      page,
    }) => {
      await test.step("Since I am navigating the Sandbox of FreeRangers", async () => {
        await page.goto(
          "https://thefreerangetester.github.io/sandbox-automation-testing/"
        );
      });

      await test.step("I can select the option 'No' button", async () => {
        await page.getByLabel("No").check();
      });
    });

    test("In the dropdown menu of the Automation Sandbox, you can select an item", async ({
      page,
    }) => {
      await test.step("Since I am navigating the Sandbox of FreeRangers", async () => {
        await page.goto(
          "https://thefreerangetester.github.io/sandbox-automation-testing/"
        );
      });

      await test.step("I can select the sport option of the dropdown", async () => {
        await page.getByLabel("Dropdown").selectOption("Tennis");
      });
    });
    test("In the dropdown menu of the Automation Sandbox, you can select the days of the week", async ({
      page,
    }) => {
      await test.step("Since I am navigating the Sandbox of FreeRangers", async () => {
        await page.goto(
          "https://thefreerangetester.github.io/sandbox-automation-testing/"
        );
      });

      await test.step("I can select a day of the week", async () => {
        await page.getByRole("button", { name: "Día de la semana" }).click();
        await page.getByRole("link", { name: "Jueves" }).click();
      });
    });

    test("In the Automation Sandbox, you can upload a file", async ({
      page,
    }) => {
      await test.step("Since I am navigating the Sandbox of FreeRangers", async () => {
        await page.goto(
          "https://thefreerangetester.github.io/sandbox-automation-testing/"
        );
      });

      await test.step("I can upload a file", async () => {
        await page
          .getByLabel("Upload file")
          .setInputFiles(["Invoice 1.pdf", "Invoice 2.pdf", "Invoice 3.pdf"]);
      });
    });

    test("In the Automation Sandbox, you can drag and drop elements", async ({
      page,
    }) => {
      await test.step("Since I am navigating the Sandbox of FreeRangers", async () => {
        await page.goto(
          "https://thefreerangetester.github.io/sandbox-automation-testing/"
        );
      });

      await test.step("I can drag and drop the element", async () => {
        await page
          .getByTestId("draggable")
          .dragTo(page.getByTestId("droppable"));
      });
    });
  });
})();
