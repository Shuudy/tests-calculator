import { test, expect } from "@playwright/test";

test.describe("Calculator test", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("http://localhost:5173");
    });

    test("should display the title", async ({ page }) => {
        const title = await page.title();
        expect(title).toBe("Tests Calculator");
    });
});
