import { test, expect, Browser, Page } from "@playwright/test";

(async () => {
  let browser: Browser;
  let page: Page;

  test.describe("Navigation on FreeRangers", () => {
    const sections = [
      { name: "Cursos", url: "/cursos", expectedTitle: /Cursos/i },
      { name: "Mentorías", url: "/mentorias", expectedTitle: /Mentorías/i },
      { name: "Talleres", url: "/talleres", expectedTitle: /Talleres/i },
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
      });
    }
  });
})();
