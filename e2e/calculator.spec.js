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

    test("should display 1 when 1 button is clicked", async ({ page }) => {
        await page.click("text=1");

        const display = page.locator(".display");
        await expect(display).toHaveText("1");
    });

    test("should display 123 when 1, 2, and 3 buttons are clicked", async ({ page }) => {
        await page.click("text=1");
        await page.click("text=2");
        await page.click("text=3");

        const display = page.locator(".display");
        await expect(display).toHaveText("123");
    });

    test("should display 1-3 when 1, -, and 3 buttons are clicked", async ({ page }) => {
        await page.click("text=1");
        await page.click("text=-");
        await page.click("text=3");

        const display = page.locator(".display");
        await expect(display).toHaveText("1-3");
    });

    test("should display 0 when 1, -, and C buttons are clicked", async ({ page }) => {
        await page.click("text=1");
        await page.click("text=-");
        page.getByRole('button', { name: 'C', exact: true }).click();

        const display = page.locator(".display");
        await expect(display).toHaveText("0");
    });

    test("should display 2 when 1, +, 1, and = buttons are clicked", async ({ page }) => {
        await page.getByRole('button', { name: '1' }).click();
        await page.getByRole('button', { name: '+' }).click();
        await page.getByRole('button', { name: '1' }).click();
        await page.getByRole('button', { name: '=' }).click();

        const display = page.locator(".display");
        await expect(display).toHaveText("2");
    });

    test("should display 48 when 8, *, 6, and = buttons are clicked", async ({ page }) => {
        await page.getByRole('button', { name: '8' }).click();
        await page.getByRole('button', { name: '*' }).click();
        await page.getByRole('button', { name: '6' }).click();
        await page.getByRole('button', { name: '=' }).click();

        const display = page.locator(".display");
        await expect(display).toHaveText("48");
    });

    test("should display 4 when 8, -, 4, and = buttons are clicked", async ({ page }) => {
        await page.getByRole('button', { name: '8' }).click();
        await page.getByRole('button', { name: '-' }).click();
        await page.getByRole('button', { name: '4' }).click();
        await page.getByRole('button', { name: '=' }).click();

        const display = page.locator(".display");
        await expect(display).toHaveText("4");
    });

    test("should display history when 8, -, 4, and = buttons are clicked", async ({ page }) => {
        await page.getByRole('button', { name: '8' }).click();
        await page.getByRole('button', { name: '-' }).click();
        await page.getByRole('button', { name: '4' }).click();
        await page.getByRole('button', { name: '=' }).click();

        const history = page.locator(".history ul li");
        await expect(history).toHaveText("8-4 = 4");
    });

    test("should clear history when C button is clicked", async ({ page }) => {
        await page.getByRole('button', { name: '8' }).click();
        await page.getByRole('button', { name: '-' }).click();
        await page.getByRole('button', { name: '4' }).click();
        await page.getByRole('button', { name: '=' }).click();
        await page.getByRole('button', { name: 'C', exact: true }).click();

        const history = page.locator(".history ul li");
        await expect(history).toHaveCount(0);
    });
});
