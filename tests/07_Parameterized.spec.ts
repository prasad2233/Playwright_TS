import { test, expect } from '@playwright/test'

const searchKeywords = ['Play wright by Testers talk', 'Cypresss by testers talk']

for (const searchKeyword of searchKeywords) {
    test(`Parameterized test in playwright ${searchKeyword}`, { tag: ['@DP'] }, async ({ page }) => {
        await page.goto("https://www.youtube.com/")

        await page.getByRole('combobox', { name: 'Search' }).click();
        await page.getByRole('combobox', { name: 'Search' }).fill(searchKeyword);
        await page.getByRole('combobox', { name: 'Search' }).press('Enter')

        await page.getByRole('link', { name: searchKeyword }).first().click()
        await expect(page).toHaveTitle(`${searchKeyword} - YouTube`)
    })
}