import { test, expect, Browser, Page } from "@playwright/test";

(async () => {
  let browser: Browser;
  let page: Page;

  test.describe("Navigation on FreeRangers", () => {
    const sections = [
      { name: "Cursos", url: "/cursos", expectedTitle: /Cursos/i },
      {
        name: "Mentorías",
        url: "/mentoria-1-1-con-pato",
        expectedTitle: /Mentoria/i,
      },
      {
        name: "Talleres",
        url: "/talleres-y-webinars",
        expectedTitle: /Talleres-y-webinars/i,
      },
      { name: "Blog", url: "/blog", expectedTitle: /Blog/i },
      { name: "Recursos", url: "/recursos", expectedTitle: /Recursos/i },
      {
        name: "Acceder",
        url: "/login",
        expectedTitle: /Acceder a Free Range Testers/i,
      },
    ];

    for (const section of sections) {
      test(`Navigate to ${section.name} section`, async ({ page }) => {
        await test.step("Given I am on the FreeRangers homepage", async () => {
          await page.goto("https://www.freerangetesters.com", {
            waitUntil: "domcontentloaded",
          });
          await expect(page).toHaveURL(/freerangetesters\.com/i);
        });
        await test.step(`When I click on the ${section.name} link`, async () => {
          page
            .locator(`#page_header`)
            .getByRole("link", { name: section.name, exact: true })
            .click();
          await page.waitForURL(`**${section.url}`, {
            waitUntil: "domcontentloaded",
          });
        });
      });
    }
  });
})();
