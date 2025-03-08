import { test, expect } from "@playwright/test";

test.describe("Calculator test", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("http://localhost:5173");
    });

    test("should display the title", async ({ page }) => {
        const title = await page.title();
        expect(title).toBe("Tests Calculator");
    });

    test("should clear input when CE button is clicked", async ({ page }) => {
        await page.click("text=CE");

        const display = page.locator(".display");
        await expect(display).toHaveText("0");
    });

    test("should clear input when C button is clicked", async ({ page }) => {
        await page.click("text=C");

        const display = page.locator(".display");
        await expect(display).toHaveText("0");
    });
});
