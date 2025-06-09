import { test, expect } from '@playwright/test'

test('read ENv config in Playwright', async ({ page, browser }) => {
    await page.goto(`${process.env.Youtube_URL}`)

    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill('Play wright by Testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter')

    await page.getByRole('link', { name: 'Play wright by Testers talk' }).first().click()
    await expect(page).toHaveTitle(`Play wright by Testers talk - YouTube`)

})
