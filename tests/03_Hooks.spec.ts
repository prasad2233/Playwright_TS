import { test, expect } from '@playwright/test'

let context
test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.google.com/');
    // await page.close(); 
});

test.afterAll("run after all", async () => {
    console.log("running after all tests")
})

test("My first test", async ({ browser  }) => {

    const page = await context.newPage();
    await page.goto('https://www.google.com/');

    // Interact with search box
    await page.getByRole('combobox', { name: 'Search' }).fill('hello dp');
    await page.keyboard.press('Enter');

    // Wait for results & verify
    await page.waitForSelector('#search'); // Ensure results load
    await expect(page).toHaveTitle(/Google Search/); // Validate page title

    await page.close(); // Cleanup

})

test("My Second test", async ({ page }) => {
    await page.goto('https://github.com/prasad2233/')
})